import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import CollapseIcon from "../../images/collapse.svg?url";
import ExpandIcon from "../../images/expand.svg?url";
import MeshPurpleTurquoise from "../../images/mesh-purple-turquoise.svg";
import { Section } from "../shared/section";
import { getAltTextFromFileName } from "../shared/utils";

import { EXPERIENCE_YEARS } from "~/components/sections/experience-and-education";
import { useNarrowView } from "~/hooks/use-narrow-view";
import { useTranslationWithMarkdown } from "~/hooks/use-translation-with-markdown";
import FaceWithSunglassesImg from "~/images/face-with-sunglasses.svg";
import RobotImg from "~/images/robot.svg";
import RocketImg from "~/images/rocket.svg";
import StrategyImg from "~/images/strategy.svg";
import AiChipImg from "~/images/ai-chip.svg";
import FreeImg from "~/images/free.svg";

export const ServiceOfferData: ServiceOfferType[] = [
	{
		logo: FaceWithSunglassesImg,
		titleKey: "webApplications",
		descriptionTranslationKey: "getAFastElegant"
	},
	{
		logo: RocketImg,
		titleKey: "mvpInOneMonth",
		descriptionTranslationKey: "youWillGetASolid"
	},
	{
		logo: RobotImg,
		titleKey: "iotPlatforms",
		descriptionTranslationKey: "asAMechanicalEngineer"
	},
	{
		logo: AiChipImg,
		titleKey: "aiIntegrations",
		descriptionTranslationKey: "wantToAddAi"
	},
	{
		logo: StrategyImg,
		titleKey: "free30MinConsultation",
		descriptionTranslationKey: "stuckOrJustHave"
	}
];

export interface ServiceOfferType {
	logo: string;
	titleKey: string;
	descriptionTranslationKey: string;
}

export const ServiceOffer = () => {
	const { isNarrowView } = useNarrowView();
	const staggerAnimation = isNarrowView
		? {}
		: {
			viewport: { amount: 0.2, once: true },
			transition: {
				staggerChildren: 0.25
			},
			initial: "hidden",
			whileInView: "visible"
		};
	return (
		<Section titleKey="whatICanDoForYou" className={"mt-16"}>
			<div className="relative flex">
				<img
					alt=""
					aria-hidden="true"
					className="invisible absolute top-1/2 left-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 sm:visible"
					src={MeshPurpleTurquoise}
				/>
				<motion.div
					className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6"
					{...staggerAnimation}
				>
					{ServiceOfferData.map((offer) => {
						return (
							<Card
								key={offer.titleKey}
								offer={offer}
								isNarrowView={isNarrowView}
							/>
						);
					})}
				</motion.div>
			</div>
		</Section>
	);
};

const Card = ({
	              offer,
	              isNarrowView
              }: {
	offer: ServiceOfferType;
	isNarrowView: boolean;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [zIndex, setZIndex] = useState(0);

	const onClick = () => {
		if (isOpen) {
			setIsOpen(false);
			//avoid card appear below the other while closing
			setTimeout(() => {
				setZIndex(0);
			}, 500);
		} else {
			setIsOpen(true);
			setZIndex(10);
		}
	};
	const appearAnimation = isNarrowView
		? {
			initial: "hidden",
			whileInView: "visible",
			viewport: { amount: 0.5, once: true }
		}
		: {};

	return (
		<motion.div
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 }
			}}
			transition={{ ease: "easeInOut", duration: 0.8 }}
			key={offer.titleKey}
			{...appearAnimation}
			className="relative"
		>

			{isOpen && (
				<div className="relative z-0">
					<CardContent offer={offer} isOpen={isOpen} />
				</div>
			)}
			<motion.div
				onClick={onClick}
				style={{ zIndex }}
				layout
				className={` ${isOpen ? "fixed inset-0 mx-3 flex" : "relative"}`}
			>
				<CardContent isExpandable offer={offer} isOpen={isOpen} />
			</motion.div>
		</motion.div>
	);
};

const CardContent = ({
	                     isExpandable,
	                     offer,
	                     isOpen
                     }: {
	isExpandable?: boolean;
	offer: ServiceOfferType;
	isOpen: boolean;
}) => {
	const { t } = useTranslation();
	const { tm } = useTranslationWithMarkdown();
	const isFree = offer.titleKey === "free30MinConsultation";

	return (
		<>
			<motion.div
				layout={isExpandable}
				className={`border-secondary/10 from-neutral to-neutral-dark relative flex cursor-pointer rounded-2xl border-2 border-solid bg-linear-to-br p-4 text-left ${
					isOpen && isExpandable
						? "from-neutral/70 to-neutral-dark/70 m-auto h-auto w-full max-w-lg flex-wrap bg-linear-to-br backdrop-blur-sm"
						: "h-64 w-64 flex-col md:h-56 md:w-56"
				} ${isOpen && !isExpandable ? "invisible" : "visible"}`}
			>
				<motion.button
					layout={isExpandable ? "preserve-aspect" : false}
					aria-label={isOpen ? t("expand") : t("contract")}
					className={`absolute top-2.5 right-2.5 cursor-pointer ${
						isOpen ? "h-7 w-7" : "h-6 w-6"
					}`}
				>
					<img
						width={28}
						height={28}
						src={isOpen ? CollapseIcon : ExpandIcon}
						aria-label={isOpen ? t("expand") : t("contract")}
						alt={isOpen ? t("expand") : t("contract")}
					/>
				</motion.button>
				<motion.img
					layout={isExpandable ? "preserve-aspect" : false}
					loading="lazy"
					alt={getAltTextFromFileName(offer.logo)}
					width={"70"}
					height={"70"}
					src={offer.logo}
					className={`pointer-events-none select-none ${
						isOpen
							? "mx-4 mt-4 mb-auto h-[170px] w-[170px]"
							: "my-4 h-[105px] w-[105px] md:h-[70px] md:w-[70px]"
					}`}
				/>
				<motion.div
					className={`flex-1 ${isOpen ? "min-w-[230px]" : "min-w-0"}`}
					layout={isExpandable}
				>
					<motion.h3
						layout={isExpandable ? "preserve-aspect" : false}
						className={
							isOpen ? "mt-2 mr-4 mb-3 text-lg font-semibold" : "mb-1 text-lg"
						}
					>
						{t(offer.titleKey)}
					</motion.h3>
					{isOpen && (
						<motion.div className="my-2 text-base">
							{tm(offer.descriptionTranslationKey, { years: EXPERIENCE_YEARS })}
						</motion.div>
					)}
				</motion.div>
			</motion.div>
			{isFree && (<motion.img
				layout={isExpandable ? "preserve-aspect" : false}
				alt={"free"}
				width={"80"}
				height={"80"}
				src={FreeImg}
				className={`absolute pointer-events-none select-none -top-4 -right-4 rotate-20`}
			/>)}

		</>
	);
};
