import {
	animate,
	motion,
	MotionValue,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import KukaLogo from "~/images/kuka.svg";
import MaibornWolffLogo from "~/images/maibornwolff.svg";
import BmwLogo from "~/images/bmw.webp";
import FraunhoferLogo from "~/images/frauenhofer.webp";
import HealmingLogo from "~/images/healming.webp";
import JaguarLogo from "~/images/jaguar.webp";
import JochenSchweizerLogo from "~/images/jochen-schweizer.webp";
import ManLogo from "~/images/man.webp";
import MercedesLogo from "~/images/mercedes.webp";
import PorscheLogo from "~/images/porsche.webp";
import SchmalzLogo from "~/images/schmalz.webp";
import TuevLogo from "~/images/tuev.webp";
import UnitedLogo from "~/images/united.webp";
import VwLogo from "~/images/vw.webp";

import DoubleQuotesIcon from "../../images/double-quotes.svg";
import { Section } from "../shared/section";
import { getAltTextFromFileName } from "../shared/utils";

import { colors } from "~/constants/colors";
import ArrowLeft from "~/images/arrow-left.svg";
import ArrowRight from "~/images/arrow-right.svg";
import DavidPhoto from "~/images/david.webp";
import FloyLogo from "~/images/floy-logo.svg";
import NewspectiveLogo from "~/images/newspective-logo.svg";
import PaulPhoto from "~/images/paul.webp";
import PaulaPhoto from "~/images/paula.webp";
import QuantedLogo from "~/images/quanted-logo.png";
import SmartCube360Logo from "~/images/smart-cube-360.svg";
import ThomasPhoto from "~/images/thomas.png";
import { useNarrowView } from "~/hooks/use-narrow-view";
import MeshPurple from "~/images/mesh-purple.svg";

export const testimonials: TestimonialsType[] = [
	{
		testimonialKey: "christianIsAVery",
		person: "David Forino",
		photo: DavidPhoto,
		company: "Quanted",
		companyLogo: QuantedLogo,
		companyHeight: 70,
		titleKey: "ctoAndCoFounder",
	},
	{
		testimonialKey: "christianIsAlwaysReliable",
		person: "Thomas Kirner",
		photo: ThomasPhoto,
		company: "smart cube 360 GmbH",
		companyLogo: SmartCube360Logo,
		companyHeight: 70,
		titleKey: "ceoAndCoFounder",
	},
	{
		testimonialKey: "whatStoodOut",
		person: "Paul Brachmann",
		photo: PaulPhoto,
		company: "Floy® GmbH",
		companyLogo: FloyLogo,
		companyHeight: 30,
		titleKey: "cto",
	},
	{
		testimonialKey: "hePerfectlyEmbodies",
		person: "Paula Montesa Rausell",
		photo: PaulaPhoto,
		company: "Newspective",
		companyLogo: NewspectiveLogo,
		companyHeight: 80,
		titleKey: "headOfStrategy",
	},
];

export interface TestimonialsType {
	testimonialKey: string;
	person: string;
	photo: string;
	company: string;
	companyLogo: string;
	companyHeight: number;
	titleKey: string;
}

const MOBILE_SLIDE = 84;
const MOBILE_OFFSET = 8;
const DESKTOP_SLIDE = 78;
const DESKTOP_OFFSET = 11;
const BG_COLOR = "#130d18";
const SPRING = { type: "spring" as const, stiffness: 300, damping: 30 };

export function Testimonials() {
	const { t } = useTranslation();
	const [autoplay, setAutoplay] = useState(true);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const { isNarrowView } = useNarrowView();
	const trackRef = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const currentIndexRef = useRef(0);

	const getTargetX = useCallback(
		(index: number) => {
			const w = trackRef.current?.offsetWidth ?? 0;
			const sw = isNarrowView ? MOBILE_SLIDE : DESKTOP_SLIDE;
			const so = isNarrowView ? MOBILE_OFFSET : DESKTOP_OFFSET;
			return w * (so / 100) - index * w * (sw / 100);
		},
		[isNarrowView],
	);

	const goToSlide = useCallback(
		(target: number | "prev" | "next") => {
			setCurrentSlideIndex((prev) => {
				let index: number;
				if (target === "prev") {
					index = prev <= 0 ? testimonials.length - 1 : prev - 1;
				} else if (target === "next") {
					index = prev >= testimonials.length - 1 ? 0 : prev + 1;
				} else {
					index = target;
				}
				currentIndexRef.current = index;
				animate(x, getTargetX(index), SPRING);
				return index;
			});
		},
		[x, getTargetX],
	);

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoplay) goToSlide("next");
		}, 5000);
		return () => clearInterval(interval);
	}, [autoplay, goToSlide]);

	useEffect(() => {
		const element = trackRef.current;
		if (!element) return;
		const observer = new ResizeObserver(() => {
			animate(x, getTargetX(currentIndexRef.current), { duration: 0 });
		});
		observer.observe(element);
		return () => observer.disconnect();
	}, [x, getTargetX]);

	const slideWidth = isNarrowView ? MOBILE_SLIDE : DESKTOP_SLIDE;

	return (
		<Section titleKey="testimonials" className="relative mx-auto max-w-[900px]">
			<div
				className="relative mx-auto max-w-5xl"
				aria-label={t("testimonials")}
			>
				<div ref={trackRef} className="overflow-hidden pb-6">
					<motion.div
						className="flex cursor-grab select-none active:cursor-grabbing"
						style={{ x }}
						drag="x"
						dragElastic={0}
						dragMomentum={false}
						onDragStart={() => setAutoplay(false)}
						onDragEnd={(_, { offset, velocity }) => {
							const w = trackRef.current?.offsetWidth ?? 300;
							const threshold = w * 0.15;
							if (offset.x > threshold || velocity.x > 500) {
								goToSlide("prev");
							} else if (offset.x < -threshold || velocity.x < -500) {
								goToSlide("next");
							} else {
								animate(x, getTargetX(currentIndexRef.current), SPRING);
							}
						}}
					>
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.testimonialKey}
								className="shrink-0 px-2"
								style={{ width: `${slideWidth}%` }}
							>
								<TestimonialCard testimonial={testimonial} />
							</div>
						))}
					</motion.div>
				</div>

				<EdgeGradients />

				<DesktopArrows
					onPrev={() => {
						setAutoplay(false);
						goToSlide("prev");
					}}
					onNext={() => {
						setAutoplay(false);
						goToSlide("next");
					}}
				/>
			</div>

			<SlideDots
				currentSlideIndex={currentSlideIndex}
				onDotClick={(index) => {
					setAutoplay(false);
					goToSlide(index);
				}}
			/>
			<LogoCarousel />
		</Section>
	);
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialsType }) {
	const { t } = useTranslation();
	return (
		<div className="shadow-sm-turquoise border-secondary/10 from-neutral to-neutral-dark my-6 flex h-full flex-1 flex-col rounded-xl border-2 border-solid bg-linear-to-br p-5">
			<img
				loading="lazy"
				width="150"
				height={testimonial.companyHeight}
				style={{ width: 150, height: testimonial.companyHeight }}
				className="z-10 mx-auto mt-2 object-contain"
				alt={getAltTextFromFileName(testimonial.companyLogo)}
				src={testimonial.companyLogo}
			/>
			<div className="flex flex-1 flex-col justify-center">
				<img
					loading="lazy"
					width="20"
					height="20"
					className="mr-auto mb-2 ml-2"
					alt="double quotes"
					src={DoubleQuotesIcon}
				/>
				<div className="text-base">{t(testimonial.testimonialKey)}</div>
			</div>
			<div className="mx-auto my-2 flex justify-end text-left">
				<img
					loading="lazy"
					width="80"
					height="80"
					className="my-auto"
					alt={getAltTextFromFileName(testimonial.photo)}
					src={testimonial.photo}
				/>
				<div className="my-auto flex flex-col justify-end">
					<div className="text-md font-bold">{testimonial.person}</div>
					<div className="text-base">{t(testimonial.titleKey)}</div>
					<div className="text-sm">{t(testimonial.company)}</div>
				</div>
			</div>
		</div>
	);
}

function EdgeGradients() {
	return (
		<>
			<div
				className="pointer-events-none absolute inset-y-0 left-0 w-[12%]"
				style={{
					background: `linear-gradient(to right, ${BG_COLOR}, transparent)`,
				}}
			/>
			<div
				className="pointer-events-none absolute inset-y-0 right-0 w-[12%]"
				style={{
					background: `linear-gradient(to left, ${BG_COLOR}, transparent)`,
				}}
			/>
		</>
	);
}

function DesktopArrows({
	onPrev,
	onNext,
}: {
	onPrev: () => void;
	onNext: () => void;
}) {
	return (
		<div className="pointer-events-none absolute inset-0 hidden items-center justify-between md:flex">
			<button
				className="pointer-events-none h-full w-full max-w-[200px] cursor-pointer"
				onClick={onPrev}
			>
				<span className="bg-grey/80 pointer-events-auto mr-auto ml-4 flex h-12 w-12 cursor-pointer rounded-full">
					<img
						alt="previous testimonial"
						height={48}
						width={48}
						className="h-full w-full"
						src={ArrowLeft}
					/>
				</span>
			</button>
			<button
				className="pointer-events-none h-full w-full max-w-[200px] cursor-pointer"
				onClick={onNext}
			>
				<span className="bg-grey/80 pointer-events-auto mr-4 ml-auto flex h-12 w-12 cursor-pointer rounded-full">
					<img
						alt="next testimonial"
						height={48}
						width={48}
						className="h-full w-full"
						src={ArrowRight}
					/>
				</span>
			</button>
		</div>
	);
}

function SlideDots({
	currentSlideIndex,
	onDotClick,
}: {
	currentSlideIndex: number;
	onDotClick: (index: number) => void;
}) {
	const { t } = useTranslation();
	return (
		<div className="mt-2 text-center">
			{testimonials.map((testimonial, index) => (
				<button
					key={testimonial.testimonialKey}
					aria-label={`${t("seePage")} ${index + 1}`}
					className="h-12 w-12 cursor-pointer"
					onClick={() => {
						onDotClick(index);
					}}
				>
					<span
						style={{
							boxShadow:
								currentSlideIndex === index
									? `${colors.primary} 0px 0px 12px 6px`
									: "unset",
						}}
						className="bg-secondary inline-block h-3 w-3 rounded-full"
					/>
				</button>
			))}
		</div>
	);
}

interface Logo { src: string; className?: string }

const logos: Logo[] = [
	{ src: HealmingLogo, className: "invert contrast-[100] brightness-200" },
	{ src: JaguarLogo, className: "brightness-200" },
	{ src: JochenSchweizerLogo, className: "brightness-[3]" },
	{ src: ManLogo, className: "brightness-200" },
	{ src: FraunhoferLogo, className: "invert contrast-[200]" },
	{ src: BmwLogo, className: "brightness-200" },
	{ src: MercedesLogo, className: "brightness-200" },
	{ src: PorscheLogo, className: "brightness-200 invert" },
	{ src: SchmalzLogo, className: "brightness-500" },
	{ src: TuevLogo, className: "invert brightness-75" },
	{ src: UnitedLogo, className: "brightness-500" },
	{ src: VwLogo, className: "brightness-200 invert" },
	{ src: KukaLogo, className: "brightness-200" },
	{ src: MaibornWolffLogo, className: "brightness-[3]" },
	{ src: QuantedLogo, className: "brightness-200" },
	{ src: SmartCube360Logo, className: "brightness-200" },
	{ src: FloyLogo, className: "brightness-[3]" },
];

const LogoCarousel = () => {
	const { t } = useTranslation();
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});
	const { isNarrowView } = useNarrowView();


	const rows = isNarrowView ? 6 : 3;

	const divider = Math.ceil(logos.length / rows);
	const baseMagnitude = isNarrowView ? 350 : 200;
	const rowsData = Array.from({ length: rows }, (_, i) => {
		const magnitude = baseMagnitude - Math.floor(i / 2) * 50;
		const range: [number, number] = i % 2 === 0 ? [-magnitude, magnitude] : [magnitude, -magnitude];
		return {
			logos: [...logos.slice(i * divider), ...logos.slice(0, i * divider)],
			parallaxRange: range,
		};
	});

	return (
		<div className="mt-24 w-full space-y-8">
			<h3 className="mb-6 text-lg font-semibold">{t("otherCompanies")}</h3>
			<div ref={containerRef} className="flex flex-col gap-3 overflow-hidden">
				{rowsData.map((row, i) => (
					<InfiniteRow key={i} logos={row.logos} scrollYProgress={scrollYProgress} parallaxRange={row.parallaxRange} />
				))}
			</div>
		</div>
	);
};

const InfiniteRow = ({
	logos,
	scrollYProgress,
	parallaxRange,
}: {
	logos: Logo[];
	scrollYProgress: MotionValue<number>;
	parallaxRange: [number, number];
}) => {
	const parallaxX = useTransform(scrollYProgress, [0, 1], parallaxRange);
	return (
		<div className="mask-swiper overflow-x-hidden py-3">
			<motion.div style={{ x: parallaxX }} className="flex gap-12">
				{[...logos, ...logos, ...logos].map((logo, i) => (
					<img
						key={i}
						src={logo.src}
						alt=""
						draggable={false}
						className={`h-12 w-32 object-contain opacity-60 grayscale brightness-150 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] select-none${logo.className ? ` ${logo.className}` : ""}`}
					/>
				))}
			</motion.div>
		</div>
	);
};
