import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import clsx from 'clsx';
import { useRef, useState } from 'react';

import DoubleQuotesIcon from '../../images/double-quotes.svg';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

import colors from '~/constants/colors';
import { testimonials } from '~/constants/testimonials';
import { useNarrowView } from '~/hooks/useNarrowView';
import ArrowLeft from '~/images/arrow-left.svg';
import ArrowRight from '~/images/arrow-right.svg';

export function Testimonials() {
	const { isNarrowView } = useNarrowView();
	const splideRef = useRef(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const goToPage = (page: number | 'prev' | 'next') => {
		if (splideRef.current) {
			if (page === 'prev') {
				(splideRef.current as any).go(getIndex('prev'));
			} else if (page === 'next') {
				(splideRef.current as any).go(getIndex('next'));
			} else {
				(splideRef.current as any).go(page);
			}
		}
	};

	const getIndex = (direction: 'prev' | 'next') => {
		if (direction === 'prev' && currentSlideIndex <= 0) {
			return testimonials.length - 1;
		} else if (
			direction === 'next' &&
			currentSlideIndex >= testimonials.length - 1
		) {
			return 0;
		} else if (direction === 'prev') {
			return currentSlideIndex - 1;
		} else {
			return currentSlideIndex + 1;
		}
	};

	/* eslint-disable tailwindcss/classnames-order */
	// conflicting with boxShadow style
	return (
		<Section title="Testimonials" className="relative mx-auto max-w-5xl">
			<Splide
				ref={splideRef}
				hasTrack={false}
				aria-label="testimonials"
				className="md:mask-swiper mx-auto max-w-5xl"
				onMove={(_, newIndex) => {
					setCurrentSlideIndex(newIndex);
				}}
				options={{
					autoplay: true,
					perPage: 1,
					perMove: -1,
					padding: isNarrowView ? '3rem' : '15rem',
					arrows: false,
					interval: 5000,
					pagination: false,
				}}
			>
				<SplideTrack className="mask-swiper-narrow">
					{testimonials.map(testimonial => {
						return (
							<SplideSlide key={testimonial.testimonial}>
								<div
									className={`shadow-sm-turquoise mx-4 my-6 flex h-full flex-1 cursor-grab select-none flex-col rounded-xl border-2 border-solid border-secondary/10 bg-gradient-to-br from-neutral to-neutral-dark p-5`}
								>
									<img
										loading="lazy"
										width="150"
										height={testimonial.companyHeight}
										className="z-10 mx-auto mt-2 object-contain"
										alt={getAltTextFromFileName(testimonial.companyLogo)}
										src={testimonial.companyLogo}
									/>
									<div className="flex flex-1 flex-col justify-center">
										<img
											loading="lazy"
											width="20"
											height="20"
											className="mb-2 ml-2 mr-auto"
											alt="double quotes"
											src={DoubleQuotesIcon}
										/>
										<div className="text-base ">{testimonial?.testimonial}</div>
									</div>
									<div className="mx-auto my-2 flex justify-end text-left">
										<img
											loading="lazy"
											width="80"
											height="80"
											className="my-auto"
											alt={getAltTextFromFileName(testimonial?.photo)}
											src={testimonial.photo}
										/>
										<div className="my-auto flex flex-col justify-end">
											<div className="text-md font-bold ">
												{testimonial?.person}
											</div>
											<div className="text-base">{testimonial?.title}</div>
											<div className="text-sm">{testimonial?.company}</div>
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
					<ChangeButton orientation="left" onClick={() => goToPage('prev')} />
					<ChangeButton orientation="right" onClick={() => goToPage('next')} />
				</div>
				<div>
					{testimonials.map((testimonial, index) => {
						return (
							<button
								key={testimonial.testimonial}
								aria-label={`see page ${index + 1}`}
								className="h-12 w-12"
								onClick={() => goToPage(index)}
							>
								<span
									style={{
										boxShadow: clsx(
											currentSlideIndex === index &&
												`${colors.primary} 0px 0px 12px 6px`
										),
									}}
									className="inline-block h-3 w-3 rounded-full bg-secondary"
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

export type Props = {
	onClick: () => void;
	orientation: 'left' | 'right';
};
export const ChangeButton = ({ onClick, orientation }: Props) => {
	const isLeft = orientation === 'left';
	return (
		<button className="h-full w-full max-w-[200px]" onClick={onClick}>
			<span
				className={`flex h-12 w-12 rounded-full bg-grey/80 ${
					isLeft ? 'ml-4 mr-auto' : 'ml-auto mr-4'
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
