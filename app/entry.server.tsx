import { PassThrough } from "stream";

import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { EntryContext, ServerRouter } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import i18nServer from "~/modules/i18n.server";
import * as i18n from "~/config/i18n";

const ABORT_DELAY = 5000;

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	let callbackName = isbot(request.headers.get("user-agent"))
		? "onAllReady"
		: "onShellReady";

	const instance = createInstance();
	const lng = await i18nServer.getLocale(request);
	const ns = i18nServer.getRouteNamespaces(remixContext);

	await instance.use(initReactI18next).init({ ...i18n, lng, ns });

	return new Promise((resolve, reject) => {
		let didError = false;

		let { pipe, abort } = renderToPipeableStream(
			<I18nextProvider i18n={instance}>
				<ServerRouter context={remixContext} url={request.url} />
			</I18nextProvider>,
			{
				[callbackName]: () => {
					let body = new PassThrough();
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
