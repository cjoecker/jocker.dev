import { testimonials } from '../../constants/testimonials';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';
import { useNarrowView } from '../../hooks/useNarrowView';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isNarrowView } = useNarrowView();
  useEffect(() => {
    console.log('currentIndex', currentIndex);
  }, [currentIndex]);

  return (
    <Section title="Testimonials">
      <Swiper
        className="mask-swiper-narrow md:mask-swiper"
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
                  style={{ filter: isActive ? '' : 'blur(1px)' }}
                  className={`flex-1 select-none flex bg-light-grey shadow-lg p-5 flex-col rounded-xl ${
                    isActive ? '' : 'opacity-70'
                  }`}
                >
                  <img
                    loading="lazy"
                    width="150"
                    height={testimonial.companyHeight}
                    className="mx-auto object-contain mt-2"
                    alt={getAltTextFromFileName(testimonial.companyLogo)}
                    src={images(`./${testimonial.companyLogo}`)}
                  />
                  <img
                    loading="lazy"
                    width="20"
                    height="20"
                    className="ml-2 mb-2 mt-4"
                    alt="double quotes"
                    src={images(`./double-quotes.svg`)}
                  />
                  <div>{testimonial?.testimonial}</div>
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
                      <div className="text-lg font-bold">
                        {testimonial?.person}
                      </div>
                      <div>{testimonial?.title}</div>
                      <div className="text-sm opacity-80">
                        {testimonial?.company}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
        <div className="flex justify-center mt-0 md:mt-6">
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
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1 }}
      className="hover:cursor-pointer p-6 md:p-2"
      onClick={() => {
        swiper.slideTo(index);
      }}
    >
      <div
        style={{
          background: isSelected
            ? 'linear-gradient(145deg, #0C4E80, #062e4d)'
            : 'linear-gradient(145deg, #778088, #4b5157)',
        }}
        className={`w-2 h-2 bg-primary rounded-full bg-pagination bg-pagination-blue`}
      />
    </motion.button>
  );
};
