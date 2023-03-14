import { Splide, SplideSlide } from '@splidejs/react-splide';

// eslint-disable-next-line import/order
import DoubleQuotesIcon from '../../images/double-quotes.svg';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

import { testimonials } from '~/constants/testimonials';
import { useNarrowView } from '~/hooks/useNarrowView';

export function Testimonials() {
	const { isNarrowView } = useNarrowView();
	return (
		<Section title="Testimonials" className="mx-auto max-w-5xl">
			<Splide
				aria-label="testimonials"
				className="mask-swiper-narrow md:mask-swiper mx-auto max-w-5xl"
				options={{
					autoplay: true,
					perPage: 1,
					perMove: -1,
					padding: isNarrowView ? '3rem' : '15rem',
					arrows: false,
					interval: 5000,
				}}
			>
				{testimonials.map(testimonial => {
					return (
						<SplideSlide key={testimonial.testimonial}>
							<div
								className={`shadow-sm-turquoise my-6 mx-4 flex h-full flex-1 cursor-grab select-none flex-col rounded-xl border-2 border-solid border-secondary/10 bg-gradient-to-br from-neutral to-neutral-dark p-5`}
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
										className="ml-2 mb-2 mr-auto"
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
			</Splide>
		</Section>
	);
}
