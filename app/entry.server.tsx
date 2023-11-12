import { resolve } from 'node:path';
import { PassThrough } from 'stream';

import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { createInstance } from 'i18next';
import Backend from 'i18next-fs-backend';
import isbot from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import i18n from './i18n'; // your i18n configuration file
import i18next from './services/i18next.server';

const ABORT_DELAY = 5000;

// eslint-disable-next-line import/no-default-export
export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext
) {
	const callbackName = isbot(request.headers.get('user-agent'))
		? 'onAllReady'
		: 'onShellReady';

	const instance = createInstance();
	const lng = await i18next.getLocale(request);
	const ns = i18next.getRouteNamespaces(remixContext);

	await instance
		.use(initReactI18next)
		.use(Backend)
		.init({
			...i18n,
			lng,
			ns,
			backend: { loadPath: resolve('./public/locales/{{lng}}.json') },
		});

	return new Promise((resolve, reject) => {
		let didError = false;

		const { pipe, abort } = renderToPipeableStream(
			<I18nextProvider i18n={instance}>
				<RemixServer context={remixContext} url={request.url} />
			</I18nextProvider>,
			{
				[callbackName]: () => {
					const body = new PassThrough();

					responseHeaders.set('Content-Type', 'text/html');

					resolve(
						new Response(body, {
							headers: responseHeaders,
							status: didError ? 500 : responseStatusCode,
						})
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
			}
		);

		setTimeout(abort, ABORT_DELAY);
	});
}
