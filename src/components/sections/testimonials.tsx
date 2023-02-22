import { motion } from 'framer-motion';
import { useState } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Colors from '../../constants/colors';

// eslint-disable-next-line import/order
import { testimonials } from '../../constants/testimonials';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { useNarrowView } from '../../hooks/useNarrowView';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';
import MeshPurple from "../../images/mesh-purple.svg";
import clsx from "clsx";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isNarrowView } = useNarrowView();

  return (
    <Section title="Testimonials">
      <Swiper
        className="mask-swiper-narrow md:mask-swiper max-w-7xl"
        onSlideChange={swiper =>
          setCurrentIndex(swiper.activeIndex % testimonials.length)
        }
        effect={'coverflow'}
        centeredSlides
        grabCursor
        speed={2000}
        shortSwipes={false}
        slidesPerView={isNarrowView ? 1.1 : 2.2}
        slideToClickedSlide
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: isNarrowView ? 100 : 0,
          depth: 100,
          scale: 0.7,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {testimonials.map(testimonial => {
          const images = require.context('../../images/', false);
          return (
            <SwiperSlide key={testimonial.testimonial}>
              {({ isActive }) => (
                <div
                  style={{ filter: clsx(!isActive && 'blur(1px)')}}
                  className={`my-6 flex-1 select-none flex bg-gradient-to-br from-neutral to-neutral-dark border-solid border-secondary/10 border-2 p-5 flex-col shadow-sm-turquoise rounded-xl ${
                    isActive ? '' : 'opacity-70'
                  }`}
                >
                    <img
                      loading="lazy"
                      width="150"
                      height={testimonial.companyHeight}
                      className="mx-auto object-contain mt-2 z-10"
                      alt={getAltTextFromFileName(testimonial.companyLogo)}
                      src={images(`./${testimonial.companyLogo}`)}
                    />
                  <img
                    loading="lazy"
                    width="20"
                    height="20"
                    className="ml-2 mb-2 mt-6"
                    alt="double quotes"
                    src={images(`./double-quotes.svg`)}
                  />
                  <div className="text-base ">{testimonial?.testimonial}</div>
                  <div className="flex mx-auto justify-end text-left mt-12">
                    <img
                      loading="lazy"
                      width="80"
                      height="80"
                      className="my-auto"
                      alt={getAltTextFromFileName(testimonial?.photo)}
                      src={images(`./${testimonial?.photo}`)}
                    />
                    <div className="flex flex-col justify-end my-auto ">
                      <div className="text-md font-bold ">
                        {testimonial?.person}
                      </div>
                      <div className="text-base">{testimonial?.title}</div>
                      <div className="text-sm">
                        {testimonial?.company}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
        <div className="flex justify-center mt-0 md:mt-6 mb-4">
          {testimonials.map((_, index) => {
            return (
              <PaginationButtons
                key={index}
                index={index}
                isSelected={currentIndex === index}
              />
            );
          })}
        </div>
      </Swiper>
    </Section>
  );
}

export type Props = {
  index: number;
  isSelected: boolean;
};
export const PaginationButtons = ({ index, isSelected }: Props) => {
  const swiper = useSwiper();
  return (
    <motion.button
      aria-label={`testimonial ${index}`}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1 }}
      className="hover:cursor-pointer p-6 md:p-2"
      onClick={(e) => {
        (e.target as HTMLButtonElement).blur();
        swiper.slideTo(index);
      }}
    >
      <div
        style={{ boxShadow: clsx(isSelected && `0px 0px 8px 4px ${Colors.turquoise}`) }}
        className={`w-2 h-2 rounded-full pointer-events-none ${isSelected ? 'bg-secondary' : 'bg-secondary/70'}`}
      />
    </motion.button>
  );
};
