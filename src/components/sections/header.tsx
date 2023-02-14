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
import { useMouse } from 'react-use';

export const Header = () => {
  const { isNarrowView } = useNarrowView();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ target: ref });
  const titleY = useParallax(scrollY, -0.25);
  const subtitleY = useParallax(scrollY, -0.5);
  const buttonY = useParallax(scrollY, -1);

  // there is a bug in chromium that is not showing -webkit-fill-available correctly
  const isIphone = window.navigator.userAgent.includes('iPhone');
  const { elX, elY } = useMouse(ref);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onDiscoverMoreClick = (e: React.MouseEvent) => {
    (e.target as HTMLButtonElement).blur();

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
      className={`w-full flex items-end relative overflow-hidden mask-header mb-24 ${
        isIphone ? 'h-ios-screen' : 'h-screen'
      }`}
      ref={ref}
    >
      <Background mouseX={mouseX} mouseY={mouseY} />
      <div
        className={`${
          isNarrowView ? 'ml-6 mb-16' : 'ml-24 mb-28'
        } text-left z-10`}
      >
        <motion.h1 style={{ y: titleY }} className="text-2xl font-bold">
          Hi, I'm Christian Jöcker,
          <br />a Full-Stack Developer.
        </motion.h1>
        <motion.p
          style={{ y: subtitleY }}
          className="font-normal text-lg mt-8 mr-4 md:mr-[25vw]"
        >
          I work as a freelance developer and am passionate about creating great
          experiences with beautiful web applications!
        </motion.p>
        <motion.button
          style={{ y: buttonY, boxShadow: '0px 0px 100px 0px #00DFD866' }}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={onDiscoverMoreClick}
          className="rounded-md font-semibold text-lg hover:cursor-pointer select-none text-secondary bg-gradient-to-br from-turquoise to-blue mt-24"
        >
          <div className="py-4 px-6 m-[1px] bg-secondary rounded-md bg-[#000] bg-opacity-80 pointer-events-none">
            Discover More
          </div>
        </motion.button>
      </div>
    </div>
  );
};
export type Props = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};
export const Background = ({ mouseX, mouseY }: Props) => {
  const blueMeshX = useTransform(mouseX, value => value * -0.7);
  const blueMeshY = useTransform(mouseY, value => value * -0.5);
  return (
    <>
      <motion.img
        aria-hidden="true"
        style={{ x: mouseX, y: mouseY }}
        className="absolute right-[-50vw] top-[-40vh] w-[130vw] h-[85vh]"
        src={MeshPurple}
      />
      <motion.img
        aria-hidden="true"
        style={{ x: blueMeshX, y: blueMeshY }}
        className="absolute right-[-45vw] top-[-5vh] w-[120vw] h-[120vh]"
        src={MeshTurquoise}
      />
      <motion.img
        aria-hidden="true"
        className="absolute left-[-25vw] top-[-20vh] w-[80vw] h-[80vh]"
        src={MeshBlue}
      />
    </>
  );
};
function useParallax(scrollY: MotionValue<number>, multiplicator: number) {
  return useTransform(scrollY, value => value * multiplicator);
}
