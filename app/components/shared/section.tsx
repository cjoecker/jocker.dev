import { useInView } from "framer-motion";
import posthog from "posthog-js";
import { RefObject, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useHydrated } from "remix-utils/use-hydrated";

import useVisibleSection from "~/hooks/use-visible-section";
import type en from "~/locales/en";

type TranslationKey = keyof typeof en;

function convertToSnakeCase(str: string): string {
	return str
		.replaceAll(/([A-Z])/g, "_$1")
		.toLowerCase()
		.replace(/^_/, "");
}

export function useCaptureSeenSection(
	ref: RefObject<HTMLElement | null>,
	titleKey: TranslationKey,
) {
	const isInView = useInView(ref);
	const isHydrated = useHydrated();
	const hasBeenSeen = useRef(false);
	const { setVisibleSection } = useVisibleSection();

	useEffect(() => {
		if (!hasBeenSeen.current && isInView) {
			hasBeenSeen.current = true;
		}
		if (isHydrated && hasBeenSeen.current) {
			const sectionName = convertToSnakeCase(titleKey);
			posthog.capture("user_sees_section", {
				is_visible: isInView,
				section_name: sectionName,
			});
			if (isInView) {
				setVisibleSection(sectionName);
			}
		}
	}, [isHydrated, isInView, setVisibleSection, titleKey]);
}

export interface Props {
	titleKey: TranslationKey;
	hideTitle?: boolean;
	children: React.ReactNode;
	className?: string;
	isLast?: boolean;
}

export const Section = ({
	titleKey,
	hideTitle,
	children,
	className,
	isLast,
}: Props) => {
	const { t } = useTranslation();
	const ref = useRef<HTMLDivElement | null>(null);
	useCaptureSeenSection(ref, titleKey);

	return (
		<section
			className={`mx-4 ${isLast ? "mb-12" : "mb-[30vh]"} max-w-[100vw] ${className}`}
			ref={ref}
		>
			{!hideTitle && <h2 className="mb-12 text-xl font-bold">{t(titleKey)}</h2>}
			{children}
		</section>
	);
};
