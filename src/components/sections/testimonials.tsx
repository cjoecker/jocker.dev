import { Section } from '../shared/section';
import { TestimonialsType } from '../../constants/testimonials';
import { AnimatePresence, motion, wrap } from 'framer-motion';
import { useState } from 'react';

export const Testimonials = () => {
  const images = require.context('../../images/', false);
  const [[page, direction], setPage] = useState([2, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Section title="Testimonials">
      <div className="next" onClick={() => paginate(1)}>
        next
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        prev
      </div>
      <div className="flex gap-4">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page - 1}
            custom={{ direction, index: 1 }}
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            transition={{
              duration: 10,
              // x: { type: 'spring', stiffness: 300, damping: 30 },
              // opacity: { duration: 10 },
            }}
          >
            <Item num={imageIndex - 1} />
          </motion.div>
          <motion.div
            key={page}
            custom={{ direction, index: 2 }}
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            transition={{
              duration: 10,
              // x: { type: 'spring', stiffness: 300, damping: 30 },
              // opacity: { duration: 10 },
            }}
          >
            <Item num={imageIndex} />
          </motion.div>
          <motion.div
            key={page + 1}
            custom={{ direction, index: 3 }}
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
            transition={{
              duration: 10,
              // x: { type: 'spring', stiffness: 300, damping: 30 },
              // opacity: { duration: 10 },
            }}
          >
            <Item num={imageIndex + 1} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};


export const Item = ({num}: {num: number}) => {
  return (
    <div className="w-[100px]">
      {num}
    </div>
  );
};

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
const directions: Record<number, Object> = {
  1: {
    zIndex: 1,
    x: -50,
    scale: 0.5,
    opacity: 0.7,
  },
  2: {
    zIndex:2,
    x: 0,
    scale: 1,
    opacity: 1,
  },
  3: {
    zIndex: 1,
    x: 50,
    scale: 0.5,
    opacity: 0.7,
  },
}
const variants = {
  enter: ({direction, index}:{direction:number, index:number}) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      zIndex:0,
      scale: 0,
    };
  },
  animate: ({direction, index}:{direction:number, index:number}) => {
    return directions[index]
  },
  exit: ({direction, index}:{direction:number, index:number}) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
