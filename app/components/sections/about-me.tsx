import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import ChristianImg from "../../images/christian.jpg";
import Signature from "../../images/signature.svg";
import { Section } from "../shared/section";

import { POSTHOG_IGNORE_KEY } from "~/constants/misc";
import { useTranslationWithMarkdown } from "~/hooks/use-translation-with-markdown";

const CLICKS_THRESHOLD = 5;

export const AboutMe = () => {
	const {t} = useTranslation();
	const { tm } = useTranslationWithMarkdown();
	const sectionClicks = useRef(0);
	const handleSectionClick = () => {
		sectionClicks.current += 1;
		if (sectionClicks.current === CLICKS_THRESHOLD) {
			sectionClicks.current = 0;
			handleAddPostHogIgnore();
		}
	};
	const handleAddPostHogIgnore = () => {
		globalThis.localStorage.setItem(POSTHOG_IGNORE_KEY, "true");
		alert("posthog ignore set to true");
	};
	return (
		<Section titleKey="aboutMe" hideTitle>
			<motion.div
				onClick={handleSectionClick}
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.1, once: true }}
				transition={{ duration: 0.7 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className="mx-auto grid max-w-4xl grid-cols-1 gap-x-9 gap-y-6 overflow-hidden rounded-2xl p-6 sm:grid-cols-5"
			>
				<div className="col-span-1 sm:col-span-2">
					<img
						loading="lazy"
						className="shadow-lg-purple h-full w-full -rotate-2 rounded-2xl object-cover"
						height={512}
						width={384}
						alt="christian"
						src={ChristianImg}
					/>
				</div>
				<div className="col-span-1 my-auto text-left sm:col-span-3">
					<h3 className="mb-4 text-xl font-semibold">{t("aboutMe")}</h3>
					<div className="text-base">{tm("aboutMeData")}</div>
					<img
						loading="lazy"
						className="mt-4"
						height={50 * 0.8}
						width={280 * 0.8}
						alt="handwritten name"
						src={Signature}
					/>
				</div>
			</motion.div>
		</Section>
	);
};
