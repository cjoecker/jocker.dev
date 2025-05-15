import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { LanguagesData } from "../../constants/languages";
import MeshPurple from "../../images/mesh-purple.svg";
import { Section } from "../shared/section";
import { getAltTextFromFileName } from "../shared/utils";

export const Languages = () => {
	const { t } = useTranslation();
	return (
		<Section titleKey="languages" className="flex flex-col">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-32 gap-y-20 md:grid-cols-4">
				{LanguagesData.map((language) => {
					return (
						<div
							className="relative col-span-1 m-auto"
							key={language.languageKey}
						>
							<img
								alt=""
								aria-hidden="true"
								height={800}
								width={600}
								className="absolute top-1/2 left-1/2 -z-10 min-h-[350px] min-w-[350px] -translate-x-1/2 -translate-y-1/2 sm:h-[200%] sm:w-[300%]"
								src={MeshPurple}
							/>
							<motion.img
								loading="lazy"
								initial="hidden"
								whileInView="visible"
								className="mb-2"
								viewport={{ amount: 0.1, once: true }}
								transition={{ duration: 0.7 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: 100 },
								}}
								width="130"
								height="130"
								alt={getAltTextFromFileName(language.icon)}
								src={language.icon}
							/>
							<div className="text-md font-bold">{t(language.languageKey)}</div>
							<div className="mt-1 text-base">{t(language.levelKey)}</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
};
