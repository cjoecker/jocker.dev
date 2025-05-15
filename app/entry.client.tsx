import * as Sentry from "@sentry/react-router";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Fetch from "i18next-fetch-backend";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { HydratedRouter } from "react-router/dom";
import { getInitialNamespaces } from "remix-i18next/client";

import { sentryConfig } from "~/constants/misc";

Sentry.init(sentryConfig);

async function main() {
	await i18next
		.use(initReactI18next)
		.use(Fetch)
		.use(I18nextBrowserLanguageDetector)
		.init({
			fallbackLng: "en",
			ns: getInitialNamespaces(),
			detection: { order: ["htmlTag"], caches: [] },
			backend: { loadPath: "/api/locales/{{lng}}/{{ns}}" },
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

// eslint-disable-next-line unicorn/prefer-top-level-await, @typescript-eslint/use-unknown-in-catch-callback-variable
main().catch((error) => {
	console.error(error);
});
