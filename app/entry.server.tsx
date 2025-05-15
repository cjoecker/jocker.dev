// eslint-disable-next-line unicorn/import-style
import { resolve } from "node:path";
import { PassThrough } from "node:stream";

import { createReadableStreamFromReadable } from "@react-router/node";
import * as Sentry from "@sentry/react-router";
import { createInstance } from "i18next";
import Backend from "i18next-fs-backend";
import { isbot } from "isbot";
import type { RenderToPipeableStreamOptions } from "react-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { EntryContext, HandleErrorFunction, ServerRouter } from "react-router";

import i18n from "./i18n";
import i18next from "./services/i18next.server";

import { sentryConfig } from "~/constants/misc";

Sentry.init(sentryConfig);

export const streamTimeout = 5000;

const baseHandleRequest = {
	ServerRouter,
	renderToPipeableStream,
	createReadableStreamFromReadable,
	async handleRequest(
		request: Request,
		responseStatusCode: number,
		responseHeaders: Headers,
		entryContext: EntryContext,
	) {
		const instance = createInstance();
		const lng = await i18next.getLocale(request);
		const ns = i18next.getRouteNamespaces(entryContext);

		await instance
			.use(initReactI18next)
			.use(Backend)
			.init({
				...i18n,
				lng,
				ns,
				backend: { loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json") },
			});
		return new Promise((resolve, reject) => {
			let shellRendered = false;
			const userAgent = request.headers.get("user-agent");

			const readyOption: keyof RenderToPipeableStreamOptions =
				(userAgent && isbot(userAgent)) || entryContext.isSpaMode
					? "onAllReady"
					: "onShellReady";

			const { pipe, abort } = renderToPipeableStream(
				<I18nextProvider i18n={instance}>
					<ServerRouter context={entryContext} url={request.url} />
				</I18nextProvider>,
				{
					[readyOption]() {
						shellRendered = true;
						const body = new PassThrough();
						const stream = createReadableStreamFromReadable(body);

						responseHeaders.set("Content-Type", "text/html");

						resolve(
							new Response(stream, {
								headers: responseHeaders,
								status: responseStatusCode,
							}),
						);

						pipe(body);
					},
					onShellError(error: unknown) {
						// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
						reject(error);
					},
					onError(error: unknown) {
						responseStatusCode = 500;
						if (shellRendered) console.error(error);
					},
				},
			);

			setTimeout(abort, streamTimeout + 1000);
		});
	},
};

export default Sentry.createSentryHandleRequest(baseHandleRequest);

export const handleError: HandleErrorFunction = (error, { request }) => {
	if (!request.signal.aborted) {
		Sentry.captureException(error);
	}
};
