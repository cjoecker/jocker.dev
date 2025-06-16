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
		descriptionTranslationKey: "getAFastElegant",
	},
	{
		logo: RocketImg,
		titleKey: "mvpInOneMonth",
		descriptionTranslationKey: "youWillGetASolid",
	},
	{
		logo: RobotImg,
		titleKey: "iotPlatforms",
		descriptionTranslationKey: "asAMechanicalEngineer",
	},
	{
		logo: AiChipImg,
		titleKey: "aiIntegrations",
		descriptionTranslationKey: "wantToAddAi",
	},
	{
		logo: StrategyImg,
		titleKey: "free30MinConsultation",
		descriptionTranslationKey: "stuckOrJustHave",
		isFree: true,
	},
];

export interface ServiceOfferType {
	logo: string;
	titleKey: string;
	descriptionTranslationKey: string;
	isFree?: boolean;
}

export const ServiceOffer = () => {
	const { isNarrowView } = useNarrowView();
	const staggerAnimation = isNarrowView
		? {}
		: {
				viewport: { amount: 0.2, once: true },
				transition: {
					staggerChildren: 0.25,
				},
				initial: "hidden",
				whileInView: "visible",
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
	isNarrowView,
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
				viewport: { amount: 0.5, once: true },
			}
		: {};

	return (
		<motion.div
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			transition={{ ease: "easeInOut", duration: 0.8 }}
			key={offer.titleKey}
			{...appearAnimation}
			className="relative"
		>
			{isOpen && (
				<div className="z-0">
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
	isOpen,
}: {
	isExpandable?: boolean;
	offer: ServiceOfferType;
	isOpen: boolean;
}) => {
	const { t } = useTranslation();
	const { tm } = useTranslationWithMarkdown();

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
				{offer.isFree && (
					<motion.img
						layout={isExpandable ? "size" : false}
						alt={"free"}
						width={"80"}
						height={"80"}
						src={FreeImg}
						className={`pointer-events-none absolute -top-4 -right-4 select-none`}
					/>
				)}

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
		</>
	);
};

export const FreeIcon = () => {
	return (
		<svg
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
			stroke-linejoin="round"
			stroke-miterlimit="2"
		>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#a)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#b)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#c)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#d)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#e)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#f)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#g)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#h)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#i)"
				fill-rule="nonzero"
			/>
			<path
				d="M13.051 3.331c1.531-1.724 3.613-1.449 4.945 0l.812.94c.282.307.689.465 1.103.43l1.444-.43c1.969-.422 3.758 1.047 3.758 3.328v.86c.042.469.452.787.875.994l1.305.545c1.887.922 2.359 3.109.984 4.945l-.39.516c-.351.473-.279 1.095.07 1.57l.39.547c1.422 1.75.621 4.151-1.388 4.99l-1.123.469c-.423.177-.589.48-.668.932l-.078 1.468c-.274 2.016-2.064 2.926-3.5 2.723l-1.711-.457c-.411-.058-.922.078-1.196.508l-.617.844c-1.531 1.726-3.598 1.439-4.64.429l-1.139-1.379c-.298-.288-.674-.535-1.124-.365l-1.722.471c-1.421.201-3.096-.892-3.363-2.302l-.199-2.042a1.346 1.346 0 00-.753-.968l-1.208-.415c-1.817-.846-2.425-2.896-1.382-4.607l.681-.941a1.348 1.348 0 00-.034-1.452l-.507-.718c-1.438-2.047-.444-4.335 1.686-5.021l.47-.151c.518-.167 1.019-.598 1.062-1.141l.105-1.318c.17-2.14 2.122-3.368 4.176-2.743l.665.202c.64.25 1.142.037 1.492-.344l.719-.917z"
				fill="url(#j)"
				fill-rule="nonzero"
			/>
			<defs>
				<radialGradient
					id="b"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(-2.81491 2.5208 -2.22412 -2.48362 18.119 3.437)"
				>
					<stop offset="0" stop-color="rgb(255,161,58)" />
					<stop offset=".3" stop-color="rgb(255,161,58)" />
					<stop offset="1" stop-color="rgb(255,161,58)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="c"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(2.26873 5.56226 -4.90764 2.00172 8.288 2.244)"
				>
					<stop offset="0" stop-color="rgb(255,148,42)" />
					<stop offset=".3" stop-color="rgb(255,148,42)" />
					<stop offset="1" stop-color="rgb(255,148,42)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="d"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(-2.31074 -.6302 .87259 -3.19952 24.42 7.849)"
				>
					<stop offset="0" stop-color="rgb(255,161,61)" />
					<stop offset=".3" stop-color="rgb(255,161,61)" />
					<stop offset="1" stop-color="rgb(255,161,61)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="e"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(-3.8232 1.84862 -1.36534 -2.82372 29.252 11.336)"
				>
					<stop offset="0" stop-color="rgb(255,161,61)" />
					<stop offset=".3" stop-color="rgb(255,161,61)" />
					<stop offset="1" stop-color="rgb(255,161,61)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="f"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(-4.7055 -.5462 .3078 -2.65172 30.177 18.52)"
				>
					<stop offset="0" stop-color="rgb(255,161,61)" />
					<stop offset=".3" stop-color="rgb(255,161,61)" />
					<stop offset="1" stop-color="rgb(255,161,61)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="g"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(3.09283 -2.98295 2.87372 2.97958 25.933 24.024)"
				>
					<stop offset="0" stop-color="rgb(224,118,42)" />
					<stop offset="1" stop-color="rgb(224,118,42)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="h"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(-2.01665 -2.60483 2.50944 -1.94281 6.019 23.015)"
				>
					<stop offset="0" stop-color="rgb(224,118,42)" />
					<stop offset="1" stop-color="rgb(224,118,42)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="i"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(3.02497 1.42845 -1.72649 3.6561 1.523 11.882)"
				>
					<stop offset="0" stop-color="rgb(240,133,29)" />
					<stop offset="1" stop-color="rgb(240,133,29)" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="j"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(-3.09374 -2.37502 2.24062 -2.91867 21.492 28.795)"
				>
					<stop offset="0" stop-color="rgb(227,116,91)" />
					<stop offset=".34" stop-color="rgb(227,116,91)" />
					<stop offset="1" stop-color="rgb(227,116,91)" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="a"
					x1="0"
					y1="0"
					x2="1"
					y2="0"
					gradientUnits="userSpaceOnUse"
					gradientTransform="rotate(128.089 10.271 9.242) scale(24.8832)"
				>
					<stop offset="0" stop-color="rgb(252,139,35)" />
					<stop offset="1" stop-color="rgb(230,118,57)" />
				</linearGradient>
			</defs>
		</svg>
	);
};
