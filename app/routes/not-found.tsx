import { useTranslation } from "react-i18next";
import { data } from "react-router";

export function loader() {
	return data(null, { status: 404 });
}

export default function Component() {
	const { t } = useTranslation("translation");

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<h1 className="text-lg">{t("notFound")}</h1>
		</div>
	);
}
