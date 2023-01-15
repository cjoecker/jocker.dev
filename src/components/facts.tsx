import { useEffect, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Facts = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.9 }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="my-24 text-xl"
      >
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

const Fact = ({ number, label }: { number: number; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const content = useTransform(scrollYProgress, [0.9, 0.7], [0, number + 1]);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = '0';
    }
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

  return (
    <div className="bg-fact flex flex-col min-w-[220px] p-4 rounded-lg">
      <div ref={ref} className="text-9xl text-primary" />;
      <div className="text-2xl mt-2">{label}</div>
    </div>
  );
};
