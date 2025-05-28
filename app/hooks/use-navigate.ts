import { useParams, useNavigate as useRouterNavigate } from "react-router";
import type { NavigateOptions } from "react-router";

import { supportedLngs } from "~/config/i18n";

export function useNavigate() {
	const navigate = useRouterNavigate();
	const params = useParams<{ locale?: string }>();

	return (to: string, options?: NavigateOptions) => {
		const pathLocale = to.startsWith("/") ? to.split("/")[1] : "";
		const hasLocale = supportedLngs.includes(pathLocale);
		const toWithLocale = hasLocale ? to : `/${params.locale}${to}`;
		return navigate(toWithLocale, options);
	};
}
