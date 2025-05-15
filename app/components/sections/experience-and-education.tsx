import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { ExperiencAndEductionType } from "../../constants/experience-and-education";
import {
	education,
	WorkExperienceData,
} from "../../constants/experience-and-education";
import { Section } from "../shared/section";
import { getAltTextFromFileName } from "../shared/utils";

type TranslationKey = keyof typeof en;

import { ExternalRedirect } from "~/components/shared/external-redirect";
import { useFormatDates } from "~/hooks/use-format-dates";
import GraduateCap from "~/images/graduate-cap.svg";
import OfficeImg from "~/images/office.svg";
import type en from "~/locales/en";

export const ExperienceAndEducation = () => {
	return (
		<Section titleKey="experienceAndEducation">
			<WorkExperience />
		</Section>
	);
};
// TODO rename course icon

const WorkExperience = () => {
	const workAndEducation = [...WorkExperienceData, ...education].sort(
		(a, b) => {
			return a.startDate.getTime() - b.startDate.getTime();
		},
	);
	return (
		<div className="flex w-full flex-col">
			{workAndEducation.map((experienceItem, index) => {
				const isOdd = index % 2 === 0;
				const isFirst = index === 0;
				const isLast = index === workAndEducation.length - 1;
				return (
					<div
						className="mx-4 flex"
						key={`${experienceItem.titleKey}${experienceItem.logo}`}
					>
						<div className="min-w-0 flex-1">
							{!isOdd && <ExperienceItem isOdd={isOdd} item={experienceItem} />}
						</div>
						<div className="flex shrink-0 grow-0 flex-col">
							<div className="flex-1 pb-2">
								<span
									className={`mx-auto flex h-full w-[3px] rounded-b-full opacity-60 ${
										isFirst ? "from-secondary bg-linear-to-t" : "bg-secondary"
									}`}
								/>
							</div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ amount: "all", once: true }}
								variants={{
									visible: { scale: 1 },
									hidden: { scale: 0 },
								}}
								className={`${
									experienceItem.type === "work"
										? "shadow-md-turquoise"
										: "shadow-md-purple"
								} border-secondary/10 from-neutral to-neutral-dark flex rounded-full border-2 border-solid bg-linear-to-br bg-contain p-3`}
							>
								<img
									loading="lazy"
									width="40"
									height="40"
									alt={
										experienceItem.type === "work"
											? "office building"
											: "graduate cap"
									}
									src={experienceItem.type === "work" ? OfficeImg : GraduateCap}
								/>
							</motion.div>
							<div className="flex-1 pt-2">
								<span
									className={`mx-auto flex h-full w-[3px] rounded-t-full opacity-60 ${
										isLast ? "from-secondary bg-linear-to-b" : "bg-secondary"
									}`}
								/>
							</div>
						</div>
						<div className="min-w-0 flex-1">
							{isOdd && <ExperienceItem isOdd={isOdd} item={experienceItem} />}
						</div>
					</div>
				);
			})}
		</div>
	);
};

// TODO make connection line a separate container

const ExperienceItem = ({
	item,
	isOdd,
}: {
	item: ExperiencAndEductionType;
	isOdd: boolean;
}) => {
	const { t } = useTranslation();
	const { formatTimePeriod } = useFormatDates();
	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: isOdd ? 100 : -100 },
	};
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
			variants={variants}
			className={`my-5 flex max-w-fit ${
				isOdd
					? "ml-3 justify-start text-left md:ml-6"
					: "mr-3 ml-auto justify-end text-right md:mr-6"
			}`}
		>
			<div className="mb-2 max-w-[300px]">
				<ExternalRedirect to={item.link}>
					<motion.img
						whileTap={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						loading="lazy"
						width="100"
						height={item.logoHeight}
						style={{ height: item.logoHeight }}
						alt={getAltTextFromFileName(item.logo)}
						src={item.logo}
						className={`mb-2 w-[100px] object-contain hover:cursor-pointer ${
							isOdd ? "object-left" : "ml-auto object-right"
						}`}
					/>
				</ExternalRedirect>
				<div
					className="mb-0.5 font-semibold break-words"
					style={{ lineHeight: "1.3rem" }}
				>
					{t(item.titleKey as TranslationKey)}
				</div>
				<div className="text-sm leading-tight opacity-80 md:text-base">
					{formatTimePeriod(item.startDate, item.endDate)}
				</div>
				<div className="text-sm leading-tight opacity-80 md:text-base">
					{t(item.locationKey as TranslationKey)}
				</div>
			</div>
		</motion.div>
	);
};
