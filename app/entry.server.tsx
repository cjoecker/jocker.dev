import { PassThrough } from "stream";

import { createReadableStreamFromReadable } from "@react-router/node";
import {
	getMetaTagTransformer,
	wrapSentryHandleRequest,
} from "@sentry/react-router";
import * as Sentry from "@sentry/react-router";
import { createInstance } from "i18next";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { I18nextProvider, initReactI18next } from "react-i18next";
import {
	AppLoadContext,
	EntryContext,
	HandleErrorFunction,
	ServerRouter,
} from "react-router";

import * as i18n from "~/config/i18n";
import { sentryConfig } from "~/constants/misc";
import i18nServer from "~/modules/i18n.server";

const ABORT_DELAY = 5000;

Sentry.init(sentryConfig);

const handleRequest = async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	routerContext: EntryContext,
	_loadContext: AppLoadContext,
): Promise<Response> {
	const instance = createInstance();
	const lng = await i18nServer.getLocale(request);
	const ns = i18nServer.getRouteNamespaces(routerContext);

	await instance.use(initReactI18next).init({ ...i18n, lng, ns });

	return new Promise((resolve, reject) => {
		let shellRendered = false;

		// Determine if we should use onAllReady or onShellReady
		const isBot = isbot(request.headers.get("user-agent"));
		const isSpaMode = !!(routerContext as { isSpaMode?: boolean }).isSpaMode;

		const readyOption = isBot || isSpaMode ? "onAllReady" : "onShellReady";

		const { pipe, abort } = renderToPipeableStream(
			<I18nextProvider i18n={instance}>
				<ServerRouter context={routerContext} url={request.url} />
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

					// this enables distributed tracing between client and server
					pipe(getMetaTagTransformer(body));
				},
				onShellError(error: unknown) {
					// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
					reject(error);
				},
				onError(error: unknown) {
					responseStatusCode = 500;
					// Log streaming rendering errors from inside the shell.  Don't log
					// errors encountered during initial shell rendering since they'll
					// reject and get logged in handleDocumentRequest.
					if (shellRendered) {
						console.error(error);
					}
				},
			},
		);

		// Abort the rendering stream after the `streamTimeout`
		setTimeout(abort, ABORT_DELAY);
	});
};

export default wrapSentryHandleRequest(handleRequest);

export const handleError: HandleErrorFunction = (error, { request }) => {
	if (!request.signal.aborted) {
		Sentry.captureException(error);
		console.error(error);
	}
};
