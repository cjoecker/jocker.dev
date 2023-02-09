import {
  animate,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

import { useNarrowView } from '../../hooks/useNarrowView';
import LightBulb from '../../images/light-bulb.svg';

export const Header = () => {
  const { isNarrowView } = useNarrowView();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const titleY = useParallax(scrollY, -0.25);
  const subtitleY = useParallax(scrollY, -0.5);
  const buttonY = useParallax(scrollY, -1);
  // there is a bug in chromium that is not showing -webkit-fill-available correctly
  const isIphone = window.navigator.userAgent.includes('iPhone');
  const imageOpacity = useTransform(scrollY, value =>
    Math.max(1 - value / 300, 0)
  );
  const onDiscoverMoreClick = () => {
    if (ref.current) {
      const targetTop = ref.current.offsetTop + ref.current.offsetHeight;
      animate(window.scrollY, targetTop, {
        duration: 2.5,
        onUpdate(value) {
          window.scrollTo(0, value);
        },
        ease: 'easeInOut',
      });
    }
  };

  return (
    <div
      className={`w-full flex items-end relative ${
        isIphone ? 'h-ios-screen' : 'h-screen'
      }`}
      ref={ref}
    >
      <div className="overflow-hidden absolute w-full h-full top-0 left-0 flex justify-end select-none pointer-events-none">
        <div
          className={`${
            isNarrowView ? 'translate-x-[40%]' : 'translate-x-1/2 my-12'
          }`}
        >
          <motion.img
            className={isNarrowView ? 'mt-4' : ''}
            style={{ opacity: imageOpacity }}
            src={LightBulb}
            alt="light bulb shining"
            width={isNarrowView ? '120%' : '100%'}
            height={isNarrowView ? 'auto' : '100%'}
          />
        </div>
      </div>
      <div
        className={`${
          isNarrowView ? 'mx-12 mb-12' : 'ml-24 mb-20'
        } text-left z-10`}
      >
        <motion.h1 style={{ y: titleY }} className="text-5xl font-normal">
          Christian Jöcker
        </motion.h1>
        <motion.h2
          style={{ y: subtitleY }}
          className="font-normal text-2xl mt-2"
        >
          Freelance Full-Stack Developer
          <br />& UX/UI Designer
        </motion.h2>
        <motion.button
          style={{ y: buttonY }}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          onClick={onDiscoverMoreClick}
          className="bg-button-header rounded-full py-2 px-4 text-xl mt-12 text-light-grey hover:cursor-pointer select-none"
        >
          Discover More
        </motion.button>
      </div>
    </div>
  );
};

function useParallax(scrollY: MotionValue<number>, multiplicator: number) {
  return useTransform(scrollY, value => value * multiplicator);
}
