import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

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

// Mobile: 84% slide width, 8% peek. Desktop: 78% slide width, 11% peek.
const MOBILE_SLIDE = 84;
const MOBILE_OFFSET = 8;
const DESKTOP_SLIDE = 78;
const DESKTOP_OFFSET = 11;
const BG_COLOR = "#130d18";

export function Testimonials() {
	const { t } = useTranslation();
	const [autoplay, setAutoplay] = useState(true);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const trackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mq = globalThis.matchMedia("(max-width: 767px)");
		setIsMobile(mq.matches);
		const handler = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};
		mq.addEventListener("change", handler);
		return () => {
			mq.removeEventListener("change", handler);
		};
	}, []);

	const dragStartX = useRef(0);
	const dragStartY = useRef(0);
	const dragStartTime = useRef(0);
	const isDraggingRef = useRef(false);
	const dragOffsetRef = useRef(0);
	const isHorizontalSwipe = useRef<boolean | null>(null);
	const slideIndexRef = useRef(0);

	const goToSlide = useCallback((target: number | "prev" | "next") => {
		setCurrentSlideIndex((prev) => {
			let index: number;
			if (target === "prev") {
				index = prev <= 0 ? testimonials.length - 1 : prev - 1;
			} else if (target === "next") {
				index = prev >= testimonials.length - 1 ? 0 : prev + 1;
			} else {
				index = target;
			}
			slideIndexRef.current = index;
			return index;
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoplay) {
				goToSlide("next");
			}
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [autoplay, goToSlide]);

	const finishDrag = useCallback(() => {
		if (!isDraggingRef.current) return;
		isDraggingRef.current = false;
		isHorizontalSwipe.current = null;

		const offset = dragOffsetRef.current;
		const trackWidth = trackRef.current?.offsetWidth ?? 1;
		const threshold = trackWidth * 0.15;
		const velocity = Math.abs(offset) / (Date.now() - dragStartTime.current);

		if (Math.abs(offset) > threshold || velocity > 0.5) {
			if (offset > 0) {
				goToSlide("prev");
			} else {
				goToSlide("next");
			}
		}
		dragOffsetRef.current = 0;
		setDragOffset(0);
	}, [goToSlide]);

	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;

		const onTouchStart = (e: TouchEvent) => {
			const touch = e.touches[0];
			setAutoplay(false);
			isDraggingRef.current = true;
			dragStartX.current = touch.clientX;
			dragStartY.current = touch.clientY;
			dragStartTime.current = Date.now();
			isHorizontalSwipe.current = null;
			dragOffsetRef.current = 0;
			setDragOffset(0);
		};

		const onTouchMove = (e: TouchEvent) => {
			if (!isDraggingRef.current) return;
			const touch = e.touches[0];
			const dx = touch.clientX - dragStartX.current;
			const dy = touch.clientY - dragStartY.current;

			if (isHorizontalSwipe.current === null) {
				if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
					isHorizontalSwipe.current = Math.abs(dx) > Math.abs(dy);
				}
				return;
			}

			if (isHorizontalSwipe.current) {
				e.preventDefault();
				dragOffsetRef.current = dx;
				setDragOffset(dx);
			}
		};

		const onTouchEnd = () => {
			finishDrag();
		};

		el.addEventListener("touchstart", onTouchStart, { passive: true });
		el.addEventListener("touchmove", onTouchMove, { passive: false });
		el.addEventListener("touchend", onTouchEnd);
		el.addEventListener("touchcancel", onTouchEnd);

		return () => {
			el.removeEventListener("touchstart", onTouchStart);
			el.removeEventListener("touchmove", onTouchMove);
			el.removeEventListener("touchend", onTouchEnd);
			el.removeEventListener("touchcancel", onTouchEnd);
		};
	}, [finishDrag]);

	const onMouseDown = useCallback((e: React.MouseEvent) => {
		e.preventDefault();
		setAutoplay(false);
		isDraggingRef.current = true;
		dragStartX.current = e.clientX;
		dragStartTime.current = Date.now();
		dragOffsetRef.current = 0;
	}, []);

	const onMouseMove = useCallback((e: React.MouseEvent) => {
		if (!isDraggingRef.current) return;
		const dx = e.clientX - dragStartX.current;
		dragOffsetRef.current = dx;
		setDragOffset(dx);
	}, []);

	const onMouseUp = useCallback(() => {
		finishDrag();
	}, [finishDrag]);

	const slideWidth = isMobile ? MOBILE_SLIDE : DESKTOP_SLIDE;
	const slideOffset = isMobile ? MOBILE_OFFSET : DESKTOP_OFFSET;

	return (
		<Section titleKey="testimonials" className="relative mx-auto max-w-[900px]">
			<div className="relative mx-auto max-w-5xl" aria-label={t("testimonials")}>
				<div
					ref={trackRef}
					className="overflow-hidden pb-6"
					onMouseDown={onMouseDown}
					onMouseMove={onMouseMove}
					onMouseUp={onMouseUp}
					onMouseLeave={onMouseUp}
				>
					<div
						className="flex"
						style={{
							transform: `translateX(calc(${slideOffset}% - ${currentSlideIndex * slideWidth}% + ${dragOffset}px))`,
							transition: dragOffset !== 0 ? "none" : "transform 0.4s ease",
						}}
					>
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.testimonialKey}
								className="shrink-0 px-2"
								style={{ width: `${slideWidth}%` }}
							>
								<div className="shadow-sm-turquoise border-secondary/10 from-neutral to-neutral-dark my-6 flex h-full flex-1 cursor-grab flex-col rounded-xl border-2 border-solid bg-linear-to-br p-5 select-none">
									<img
										loading="lazy"
										width="150"
										height={testimonial.companyHeight}
										style={{
											width: 150,
											height: testimonial.companyHeight,
										}}
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
										<div className="text-base">
											{t(testimonial.testimonialKey)}
										</div>
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
											<div className="text-md font-bold">
												{testimonial.person}
											</div>
											<div className="text-base">{t(testimonial.titleKey)}</div>
											<div className="text-sm">{t(testimonial.company)}</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Edge gradients */}
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

				{/* Desktop arrows */}
				<div className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-between">
					<ChangeButton
						orientation="left"
						onClick={() => {
							setAutoplay(false);
							goToSlide("prev");
						}}
					/>
					<ChangeButton
						orientation="right"
						onClick={() => {
							setAutoplay(false);
							goToSlide("next");
						}}
					/>
				</div>
			</div>

			<div className="mt-2 text-center">
				{testimonials.map((testimonial, index) => (
					<button
						key={testimonial.testimonialKey}
						aria-label={`${t("seePage")} ${index + 1}`}
						className="h-12 w-12 cursor-pointer"
						onClick={() => {
							setAutoplay(false);
							goToSlide(index);
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
		</Section>
	);
}

export interface Props {
	onClick: () => void;
	orientation: "left" | "right";
}

export const ChangeButton = ({ onClick, orientation }: Props) => {
	const isLeft = orientation === "left";
	return (
		<button
			className="pointer-events-none h-full w-full max-w-[200px] cursor-pointer"
			onClick={onClick}
		>
			<span
				className={`bg-grey/80 pointer-events-auto flex h-12 w-12 cursor-pointer rounded-full ${
					isLeft ? "mr-auto ml-4" : "mr-4 ml-auto"
				}`}
			>
				<img
					alt="previous testimonial"
					height={48}
					width={48}
					className="h-full w-full"
					src={isLeft ? ArrowLeft : ArrowRight}
				/>
			</span>
		</button>
	);
};
