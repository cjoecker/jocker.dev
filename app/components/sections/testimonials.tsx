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
		<Section title="Testimonials" className="mx-0 max-w-5xl mx-auto">
			<Splide
				aria-label="testimonials"
				className="mask-swiper-narrow md:mask-swiper max-w-5xl mx-auto"
				options={{
					type: 'loop',
					perPage: 1,
					perMove: 1,
					padding: isNarrowView ? '3rem' : '15rem',
					arrows: false,
					interval: 3000,
				}}
			>
				{testimonials.map(testimonial => {
					return (
						<SplideSlide key={testimonial.testimonial}>
							<div
								className={`h-full cursor-grab my-6 mx-4 flex-1 select-none flex bg-gradient-to-br from-neutral to-neutral-dark border-solid border-secondary/10 border-2 p-5 flex-col shadow-sm-turquoise rounded-xl`}
							>
								<img
									loading="lazy"
									width="150"
									height={testimonial.companyHeight}
									className="mx-auto object-contain mt-2 z-10"
									alt={getAltTextFromFileName(testimonial.companyLogo)}
									src={testimonial.companyLogo}
								/>
								<div className="flex-1 flex flex-col justify-center">
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
								<div className="flex mx-auto justify-end text-left mt-2 mb-2">
									<img
										loading="lazy"
										width="80"
										height="80"
										className="my-auto"
										alt={getAltTextFromFileName(testimonial?.photo)}
										src={testimonial.photo}
									/>
									<div className="flex flex-col justify-end my-auto">
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
