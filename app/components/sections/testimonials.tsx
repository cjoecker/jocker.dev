import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import DoubleQuotesIcon from "../../images/double-quotes.svg";
import { Section } from "../shared/section";
import { getAltTextFromFileName } from "../shared/utils";

import { colors } from "~/constants/colors";
import { testimonials } from "~/constants/testimonials";
import ArrowLeft from "~/images/arrow-left.svg";
import ArrowRight from "~/images/arrow-right.svg";
import { TranslationKey } from "~/middleware/i18next";

export function Testimonials() {
	const { t } = useTranslation();
	const [autoplay, setAutoplay] = useState(true);
	const splideRef = useRef(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const getIndex = useCallback(
		(direction: "prev" | "next") => {
			if (direction === "prev" && currentSlideIndex <= 0) {
				return testimonials.length - 1;
			} else if (
				direction === "next" &&
				currentSlideIndex >= testimonials.length - 1
			) {
				return 0;
			} else if (direction === "prev") {
				return currentSlideIndex - 1;
			} else {
				return currentSlideIndex + 1;
			}
		},
		[currentSlideIndex],
	);
	const goToPage = useCallback(
		(page: number | "prev" | "next") => {
			/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
			if (page === "prev") {
				(splideRef.current as any).go(getIndex("prev"));
			} else if (page === "next") {
				(splideRef.current as any).go(getIndex("next"));
			} else {
				(splideRef.current as any).go(page);
			}
			/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
		},
		[getIndex],
	);

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoplay) {
				goToPage("next");
			}
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [autoplay, goToPage]);

	return (
		<Section titleKey="testimonials" className="relative mx-auto max-w-[900px]">
			<Splide
				ref={splideRef}
				hasTrack={false}
				aria-label="testimonials"
				className="md:mask-swiper mx-auto max-w-5xl"
				onMove={(_: never, newIndex: number) => {
					setCurrentSlideIndex(newIndex);
				}}
				options={{
					autoplay: false,
					perPage: 1,
					perMove: -1,
					padding: "10vw",
					arrows: false,
					pagination: false,
				}}
			>
				<SplideTrack className="mask-swiper-narrow">
					{testimonials.map((testimonial) => {
						return (
							<SplideSlide key={testimonial.testimonialKey}>
								<div
									className={
										"shadow-sm-turquoise border-secondary/10 from-neutral to-neutral-dark mx-4 my-6 flex h-full flex-1 cursor-grab flex-col rounded-xl border-2 border-solid bg-linear-to-br p-5 select-none"
									}
								>
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
											<div className="text-sm">
												{t(testimonial.company as TranslationKey)}
											</div>
										</div>
									</div>
								</div>
							</SplideSlide>
						);
					})}
				</SplideTrack>
			</Splide>
			<div className="absolute top-0 flex h-full w-full flex-col">
				<div className="mx-auto flex h-full w-full max-w-5xl justify-between">
					<ChangeButton
						orientation="left"
						onClick={() => {
							setAutoplay(false);
							goToPage("prev");
						}}
					/>
					<ChangeButton
						orientation="right"
						onClick={() => {
							setAutoplay(false);
							goToPage("next");
						}}
					/>
				</div>
				<div>
					{testimonials.map((testimonial, index) => {
						return (
							<button
								key={testimonial.testimonialKey}
								aria-label={`see page ${index + 1}`}
								className="h-12 w-12 cursor-pointer"
								onClick={() => {
									setAutoplay(false);
									goToPage(index);
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
						);
					})}
				</div>
			</div>
			<div></div>
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
			className="h-full w-full max-w-[200px] cursor-pointer"
			onClick={onClick}
		>
			<span
				className={`bg-grey/80 flex h-12 w-12 cursor-pointer rounded-full ${
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
