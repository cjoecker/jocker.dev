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
			excellence: string;
			sustainableArchitecture: string;
			accountable: string;
			standForDecisions: string;
			passion: string;
			loveWhatIDo: string;
			kindness: string;
			eagerToHelp: string;
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
			yearsOfExperience: string;
			developedApps: string;
			happyCustomers: string;
			webDevelopment: string;
			uxUiDesign: string;
			// Education translations
			mechanicalEngineering: string;
			wildauGermany: string;
			masterBusinessEngineering: string;
			filderstadtGermany: string;
			// Work experience translations
			kukaSoftwareEngineer: string;
			kukaAreaManager: string;
			maibornwolffSeniorEngineer: string;
			freelanceDeveloper: string;
			augsburgGermany: string;
			munichGermany: string;
			valenciaSpain: string;
			// Testimonials
			davidTestimonial: string;
			slectedMe: string;
			thomasTestimonial: string;
			smartCube360: string;
			paulaTestimonial: string;
			newspective: string;
		};
	}
}
export type TranslationKey =
	keyof CustomTypeOptions["resources"]["translation"];
