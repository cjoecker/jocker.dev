import { RemixI18Next } from "remix-i18next/server";

import * as i18n from "~/config/i18n";

export default new RemixI18Next({
	detection: {
		supportedLanguages: i18n.supportedLngs,
		fallbackLanguage: i18n.fallbackLng,
		// eslint-disable-next-line @typescript-eslint/require-await
		async findLocale(request) {
			const pathname = new URL(request.url).pathname;
			const locale = pathname.split("/").at(1);
			return locale ?? null;
		},
	},
	// This is the configuration for i18next used
	// when translating messages server-side only
	i18next: {
		...i18n,
	},
});
