import { testimonials, TestimonialsType } from '../../constants/testimonials';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export function Testimonials() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const indexInArrayScope =
    ((activeIndex % testimonials.length) + testimonials.length) %
    testimonials.length;
  const visibleTestimonials = [...testimonials, ...testimonials].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection: Variants['direction']) => {
    setActiveIndex(prevIndex => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="main-wrapper">
      <div className="flex">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleTestimonials.map(testimonial => {
            return (
              <motion.div
                className="card"
                key={testimonial.testimonial}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (
                      testimonial.testimonial ===
                      visibleTestimonials[0].testimonial
                    ) {
                      return 'left';
                    } else if (
                      testimonial.testimonial ===
                      visibleTestimonials[1].testimonial
                    ) {
                      return 'center';
                    } else {
                      return 'right';
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                {<Testimonial testimonial={testimonial} />}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
    </div>
  );
}

type Variants = {
  direction: -1 | 1;
  position: () => 'center' | 'left' | 'right';
};

const variants = {
  enter: ({ direction }: Variants) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: Variants) => {
    return {
      scale: position() === 'center' ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({position,direction}),
      opacity: position() === 'center' ? 1 : 0.5,
    };
  },
  exit: ({ direction }: Variants) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }: Variants){
  const indexes = {
    left:  direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()]
}

export type Props = {
  testimonial: TestimonialsType;
};
export const Testimonial = ({ testimonial }: Props) => {
  const images = require.context('../../images/', false);
  return (
    <div className="flex-1 flex bg-light-grey shadow-md p-5 flex-col rounded-xl w-[200px]">
      <div>
        {/*<img*/}
        {/*  width="100"*/}
        {/*  height="100"*/}
        {/*  className=""*/}
        {/*  alt={getAltTextFromFileName(testimonial.companyLogo)}*/}
        {/*  src={images(`./${testimonial.companyLogo}`)}*/}
        {/*/>*/}
      </div>
      <span className="text-primary text-8xl text-left -mb-14">“</span>
      <div>{testimonial?.testimonial}</div>
      <div className="flex mx-auto mt-8 ml-auto">
        <div className="flex flex-col justify-end text-left my-auto">
          <div className="text-lg font-bold">{testimonial?.person}</div>
          <div>{testimonial?.title}</div>
        </div>
        {/*<img*/}
        {/*  width="100"*/}
        {/*  height="100"*/}
        {/*  className=""*/}
        {/*  alt={getAltTextFromFileName(testimonial?.photo)}*/}
        {/*  src={images(`./${testimonial?.photo}`)}*/}
        {/*/>*/}
      </div>
    </div>
  );
};
