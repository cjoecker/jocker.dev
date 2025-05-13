import { CustomTypeOptions } from "i18next";
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
			translation: typeof en;
		};
		keySeparator: false;
		nsSeparator: false;
		translation: {
			greeting: string;
			fullStackDeveloper: string;
			fullStackDeveloperPrefix: string;
			uxUiDesigner: string;
			headerDescription: string;
			discoverMore: string;
			serviceOfferTitle: string;
			skills: string;
			coreValues: string;
			testimonials: string;
			experienceAndEducation: string;
			contributions: string;
			coursesAndConferences: string;
			languages: string;
			aboutMe: string;
			contact: string;
			facts: string;
			// Service offer translations
			webApplicationsTitle: string;
			getReadyForPlatform: string;
			uxUiDesignTitle: string;
			turnDigitalDreams: string;
			iotPlatformsTitle: string;
			stepIntoFuture: string;
			lowCodeAppsTitle: string;
			whyReinventWheel: string;
			digitalStrategyTitle: string;
			withYearsExperience: string;
		};
	}
}
export type TranslationKey =
	keyof CustomTypeOptions["resources"]["translation"];
