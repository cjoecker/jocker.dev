import { PassThrough } from "stream";

import { createReadableStreamFromReadable } from "@react-router/node";
import * as Sentry from "@sentry/react-router";
import { createInstance } from "i18next";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { EntryContext, HandleErrorFunction, ServerRouter } from "react-router";

import * as i18n from "~/config/i18n";
import i18nServer from "~/modules/i18n.server";

const ABORT_DELAY = 5000;

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	const callbackName = isbot(request.headers.get("user-agent"))
		? "onAllReady"
		: "onShellReady";

	const instance = createInstance();
	const lng = await i18nServer.getLocale(request);
	const ns = i18nServer.getRouteNamespaces(remixContext);

	await instance.use(initReactI18next).init({ ...i18n, lng, ns });

	return new Promise((resolve, reject) => {
		let didError = false;

		const { pipe, abort } = renderToPipeableStream(
			<I18nextProvider i18n={instance}>
				<ServerRouter context={remixContext} url={request.url} />
			</I18nextProvider>,
			{
				[callbackName]: () => {
					const body = new PassThrough();
					const stream = createReadableStreamFromReadable(body);
					responseHeaders.set("Content-Type", "text/html");

					resolve(
						new Response(stream, {
							headers: responseHeaders,
							status: didError ? 500 : responseStatusCode,
						}),
					);

					pipe(body);
				},
				onShellError(error: unknown) {
					// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
					reject(error);
				},
				onError(error: unknown) {
					didError = true;

					console.error(error);
				},
			},
		);

		setTimeout(abort, ABORT_DELAY);
	});
}

export const handleError: HandleErrorFunction = (error, { request }) => {
	if (!request.signal.aborted) {
		Sentry.captureException(error);
		console.error(error);
	}
};
