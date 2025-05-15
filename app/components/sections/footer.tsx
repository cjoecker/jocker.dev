import { useTranslation } from "react-i18next";

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<div className="mx-auto mb-2 w-full">
			{t("designedAndCodedPrefix")}&nbsp;<span aria-label={t("love")}>♡</span>
			&nbsp;{t("designedAndCodedSuffix")}
		</div>
	);
};
