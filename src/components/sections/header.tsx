import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

import { useNarrowView } from '../../hooks/useNarrowView';
import MeshPurple from '../../images/mesh-purple.svg';
import MeshTurquoise from '../../images/mesh-turquoise.svg';
import MeshBlue from '../../images/mesh-blue.svg';
import useMeasure from 'react-use-measure';
import { useMouse } from 'react-use';

export const Header = () => {
  const { isNarrowView } = useNarrowView();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ target: ref });
  const titleY = useParallax(scrollY, -0.25);
  const subtitleY = useParallax(scrollY, -0.5);
  const buttonY = useParallax(scrollY, -1);

  const { elX, elY } = useMouse(ref);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
      onPointerMove={e => {
        mouseX.set(elX / 8);
        mouseY.set(elY / 8);
      }}
      className={`w-full flex items-end relative overflow-x-hidden h-screen`}
      ref={ref}
    >
      <Background mouseX={mouseX} mouseY={mouseY} />
      <div
        className={`${
          isNarrowView ? 'mx-12 mb-12' : 'ml-24 mb-20'
        } text-left z-10`}
      >
        <motion.h1 style={{ y: titleY }} className="text-2xl font-bold">
          Hi, I'm Christian Jöcker,
          <br />a full stack developer.
        </motion.h1>
        <motion.p
          style={{ y: subtitleY }}
          className="font-normal text-xl mt-12 max-w-[70vw]"
        >
          I work as a freelance developer and am passionate about creating great
          experiences with beautiful web applications!
        </motion.p>
        <motion.button
          style={{ y: buttonY }}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          onClick={onDiscoverMoreClick}
          className="rounded-full font-semibold py-5 px-8 text-lg hover:cursor-pointer select-none text-secondary bg-gradient-to-br from-primary to-primary/50 mb-[10vh] mt-[15vh]"
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

export type Props = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};
export const Background = ({ mouseX, mouseY }: Props) => {
  const blueMeshX = useTransform(mouseX, value => value * -0.5);
  const blueMeshY = useTransform(mouseY, value => value * -0.5);
  return (
    <>
      <motion.img
        style={{ x: mouseX, y: mouseY }}
        className="absolute right-[-50vw] top-[-20vh] w-[130vw] h-[85vh]"
        src={MeshPurple}
      />
      <motion.img
        style={{ x: blueMeshX, y: blueMeshY }}
        className="absolute right-[-45vw] top-[5vh] w-[120vw] h-[120vh]"
        src={MeshTurquoise}
      />
      <motion.img
        className="absolute left-[-45vw] top-[-15vh] w-[120vw] h-[120vh]"
        src={MeshBlue}
      />
    </>
  );
};
