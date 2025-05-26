import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { HydratedRouter } from "react-router/dom";
import { getInitialNamespaces } from "remix-i18next/client";

import * as i18n from "~/config/i18n";

async function hydrate() {
	await i18next
		.use(initReactI18next)
		.use(LanguageDetector)
		.init({
			react: { useSuspense: false },
			ns: getInitialNamespaces(),
			detection: { order: ["htmlTag"], caches: [] },
			backend: {
				cache: "no-store",
			},
			...i18n,
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
