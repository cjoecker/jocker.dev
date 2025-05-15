import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { CoreValuesType } from "../../constants/core-values";
import { CoreValuesData } from "../../constants/core-values";
import MeditatingImage from "../../images/meditating.webp";
import MeshPurpleTurquoise from "../../images/mesh-purple-turquoise.svg";
import { Section } from "../shared/section";

import { TranslationKey } from "~/middleware/i18next";

export const CoreValues = () => {
	return (
		<Section titleKey="coreValues">
			<div className="relative flex flex-col">
				<div className="relative mx-auto flex">
					<img
						alt=""
						aria-hidden="true"
						className="absolute top-1/2 left-1/2 -z-10 h-[300%] w-[300%] min-w-[1000px] -translate-x-1/2 -translate-y-1/2 sm:min-w-full"
						src={MeshPurpleTurquoise}
					/>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
						transition={{
							staggerChildren: 0.3,
						}}
						className="mx-auto grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2"
					>
						{CoreValuesData.map((value) => {
							return <CoreValue key={value.coreValueKey} coreValue={value} />;
						})}
					</motion.div>
				</div>
				<div className="m-auto px-2">
					<motion.img
						loading="lazy"
						width="350"
						height="260"
						className="mt-12 h-auto w-full max-w-[350px] sm:mt-0"
						src={MeditatingImage}
						alt="avatar of myself meditating"
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.5, once: true }}
						transition={{ duration: 2 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 100 },
						}}
					/>
				</div>
			</div>
		</Section>
	);
};

const CoreValue = ({ coreValue }: { coreValue: CoreValuesType }) => {
	const { t } = useTranslation();
	return (
		<motion.div
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			className="col-span-1 flex max-w-[190px] flex-col align-top"
		>
			<h3 className="text-md font-semibold">
				{t(coreValue.coreValueKey as TranslationKey)}
			</h3>
			<p className="mt-0.5 opacity-90">
				{t(coreValue.explanationKey as TranslationKey)}
			</p>
		</motion.div>
	);
};
