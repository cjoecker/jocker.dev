import { useInView } from "framer-motion";
import posthog from "posthog-js";
import { RefObject, useEffect, useRef } from "react";
import { useHydrated } from "remix-utils/use-hydrated";

import useVisibleSection from "~/hooks/use-visible-section";

export function useCaptureSeenSection(
	ref: RefObject<HTMLElement | null>,
	title: string,
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
			const sectionName = title.toLowerCase().replaceAll(" ", "_");
			posthog.capture("user_sees_section", {
				is_visible: isInView,
				section_name: sectionName,
			});
			if (isInView) {
				setVisibleSection(sectionName);
			}
		}
	}, [isHydrated, isInView, setVisibleSection, title]);
}

export interface Props {
	title: string;
	hideTitle?: boolean;
	children: React.ReactNode;
	className?: string;
	isLast?: boolean;
}
export const Section = ({
	title,
	hideTitle,
	children,
	className,
	isLast,
}: Props) => {
	const ref = useRef<HTMLDivElement | null>(null);
	useCaptureSeenSection(ref, title || "default");

	return (
		<section
			className={`mx-4 ${isLast ? "mb-12" : "mb-[30vh]"} max-w-[100vw] ${className}`}
			ref={ref}
		>
			{!hideTitle && <h2 className="mb-12 text-xl font-bold">{title}</h2>}
			{children}
		</section>
	);
};
