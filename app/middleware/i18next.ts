import { initReactI18next } from "react-i18next";
import { createCookie } from "react-router";
import { unstable_createI18nextMiddleware } from "remix-i18next/middleware";

import de from "~/locales/de";
import en from "~/locales/en";
import es from "~/locales/es";

export const localeCookie = createCookie("lng", {
	path: "/",
	sameSite: "lax",
	secure: process.env.NODE_ENV === "production",
	httpOnly: true,
});

export const [i18nextMiddleware, getLocale, getInstance] =
	unstable_createI18nextMiddleware({
		detection: {
			supportedLanguages: ["es", "en", "de"],
			fallbackLanguage: "en",
			cookie: localeCookie,
		},
		i18next: {
			resources: {
				en: { translation: en },
				es: { translation: es },
				de: { translation: de },
			},
		},
		plugins: [initReactI18next],
	});

declare module "i18next" {
	interface CustomTypeOptions {
		resources: {
			translation: Record<keyof typeof en, string>;
		};
		keySeparator: false;
		nsSeparator: false;
	}
}

export type TranslationKey = keyof typeof en;
