import { useInView } from "framer-motion";
import posthog from "posthog-js";
import { RefObject, useEffect, useRef } from "react";
import { useHydrated } from "remix-utils/use-hydrated";

export function useCaptureSeenSection(
	ref: RefObject<HTMLElement | null>,
	title: string,
) {
	const isInView = useInView(ref);
	const isHydrated = useHydrated();
	const hasBeenSeen = useRef(false);

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
		}
	}, [isHydrated, isInView, title]);
}

export interface Props {
	title: string;
	hideTitle?: boolean;
	children: React.ReactNode;
	className?: string;
}
export const Section = ({ title, hideTitle, children, className }: Props) => {
	const ref = useRef<HTMLDivElement | null>(null);
	useCaptureSeenSection(ref, title || "default");

	return (
		<section
			className={`mx-4 mb-[30vh] max-w-[100vw] last:mb-12 ${className}`}
			ref={ref}
		>
			{!hideTitle && <h2 className="mb-12 text-xl font-bold">{title}</h2>}
			{children}
		</section>
	);
};
