import { motion, MotionValue, useScroll, useTransform, useViewportScroll } from "framer-motion";
import LightBulb from '../../images/light-bulb.svg';
import { useRef } from "react";

export const Header = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const titleY = useParallax(scrollY,-2)
  const subtitleY = useParallax(scrollY,-4)
  const buttonY = useParallax(scrollY,-6)
  const imageOpacity = useTransform(scrollY, value => Math.max(1-value/300,0));
  return (
    <div className="h-screen w-full flex items-end relative" ref={ref}>
      <div className="overflow-hidden absolute w-full h-full top-0 left-0 flex justify-end select-none pointer-events-none">
        <div className="my-12">
          <motion.img
            style={{ opacity: imageOpacity }}
            className="translate-x-1/2"
            src={LightBulb}
            alt="light bulb shining"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="ml-24 mb-20 text-left">
        <motion.h1
          style={{ y:titleY }}
          className="text-5xl font-normal"
        >
          Christian Jöcker
        </motion.h1>
        <motion.h2
          style={{ y:subtitleY }}
          className="font-normal text-2xl mt-2"
        >
          Freelance Frontend Developer
          <br />& UX/UI Designer
        </motion.h2>
        <motion.button
          style={{ y:buttonY }}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="bg-button-header rounded-full py-2 px-4 text-xl mt-12 text-light-grey hover:cursor-pointer"
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
