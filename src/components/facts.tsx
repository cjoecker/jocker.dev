import { useEffect, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Facts = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(
    scrollYProgress,
    [0.9, 0.8, 0.1, 0],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0.9, 0.8, 0.1, 0],
    [100, 0, 0, -100]
  );

  // useTransform(y, value => console.log(value))

  return (
    <div className="w-full flex flex-col">
      <motion.div ref={ref} className="my-24 text-xl" style={{ opacity, y }}>
        <p>
          I’m passionate about creating{' '}
          <TextHighlight>great experiences</TextHighlight> with{' '}
          <TextHighlight>beautiful web applications</TextHighlight>.
        </p>
        <p className="mt-4">
          <TextHighlight>Happy customers</TextHighlight>,{' '}
          <TextHighlight>clean code</TextHighlight> and{' '}
          <TextHighlight>sustainable architectures</TextHighlight> are my
          priority.
        </p>
      </motion.div>
      <div className="flex gap-32 justify-between mx-auto">
        <Fact number={8} label={'Years of experience'} />
        <Fact number={23} label={'Developed apps'} />
        <Fact number={13} label={'Happy customers'} />
      </div>
    </div>
  );
};

const TextHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary font-medium">{children}</span>
);

const Fact = ({ number, label }: { number: number; label: string }) => (
  <div className="bg-fact flex flex-col min-w-[220px] p-4 rounded-lg">
    <Counter number={number} />
    <div className="text-2xl mt-2">{label}</div>
  </div>
);

function Counter({ number }: { number: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const content = useTransform(scrollYProgress, [0.9, 0.7], [0, number + 1]);

  useEffect(() => {
    content.onChange(val => {
      if (!ref.current) {
        return;
      }
      if (val >= number + 1) {
        ref.current.textContent = `${number}+`;
      } else {
        ref.current.textContent = val.toFixed(0);
      }
    });
  }, []);

  return <div ref={ref} className="text-9xl text-primary" />;
}
