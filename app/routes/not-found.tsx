import { useTranslation } from "react-i18next";
import { data } from "react-router";

export function loader() {
	return data(null, { status: 404 });
}

export default function Component() {
	const { t } = useTranslation("translation");

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>{t("title")}</h1>
			<p>{t("description")}</p>
		</div>
	);
}
