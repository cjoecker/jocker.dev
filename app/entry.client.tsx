import * as Sentry from "@sentry/react-router";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Fetch from "i18next-fetch-backend";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { HydratedRouter } from "react-router/dom";
import { getInitialNamespaces } from "remix-i18next/client";

import i18n from "./i18n";

import { sentryConfig } from "~/constants/misc";

Sentry.init(sentryConfig);

async function hydrate() {
	await i18next
		.use(initReactI18next)
		.use(Fetch)
		.use(I18nextBrowserLanguageDetector)
		.init({
			...i18n,
			ns: getInitialNamespaces(),

			detection: { order: ["htmlTag"], caches: [] },
			backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
		});

	startTransition(() => {
		hydrateRoot(
			document,
			<I18nextProvider i18n={i18next}>
				<StrictMode>
					<HydratedRouter />
				</StrictMode>
			</I18nextProvider>,
		);
	});
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (globalThis.requestIdleCallback) {
	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	globalThis.requestIdleCallback(hydrate);
} else {
	// Safari doesn't support requestIdleCallback
	// https://caniuse.com/requestidlecallback
	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	globalThis.setTimeout(hydrate, 1);
}
