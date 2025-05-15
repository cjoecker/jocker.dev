import { differenceInMonths, format } from "date-fns";
import { enUS, de, es } from "date-fns/locale";
import { useTranslation } from "react-i18next";

const locales = {
	en: enUS,
	de,
	es
};

export function useFormatDates() {
	const { i18n, t } = useTranslation();

	const locale = locales[i18n.language as keyof typeof locales] || enUS;

	const formatDate = (date: Date) => {
		return format(date, "MMM yyyy", { locale });
	};

	const formatTimePeriod = (startDate: Date, endDate: Date | "today") => {
		const newEndDate = endDate === "today" ? new Date() : endDate;

		const distanceInYears = (differenceInMonths(newEndDate, startDate) + 1) / 12;

		const numberFormatter = new Intl.NumberFormat(i18n.language, {
			maximumFractionDigits: 1,
			minimumFractionDigits: distanceInYears % 1 === 0 ? 0 : 1,
		});

		const distance =
			distanceInYears > 1
				? `${numberFormatter.format(distanceInYears)}${t("yearAbbreviation")}`
				: `${differenceInMonths(newEndDate, startDate)}${t("monthAbbreviation")}`;

		return endDate === "today"
			? `${formatDate(startDate)} - ${t("present")} (${distance})`
			: `${formatDate(startDate)} - ${formatDate(endDate)} (${distance})`;
	};

	return {
		formatDate,
		formatTimePeriod,
	};
}
