import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { Section } from '../shared/section';

export const Facts = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  return (
    <Section>
      <div ref={ref} className="min-h-[200vh]">
        <div className="w-full flex flex-col sticky top-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.9, once: true }}
            transition={{ duration: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="mb-24 mt-2 text-xl"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8 justify-between mx-auto flex-wrap">
            <Fact
              scrollYProgress={scrollYProgress}
              number={8}
              label={'Years of experience'}
              icon="strong"
            />
            <Fact
              scrollYProgress={scrollYProgress}
              number={23}
              label={'Developed apps'}
              icon="smartphone"
            />
            <Fact
              scrollYProgress={scrollYProgress}
              number={13}
              label={'Happy customers'}
              icon="happy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const TextHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary font-medium">{children}</span>
);
const Fact = ({
  number,
  label,
  icon,
  scrollYProgress
}: {
  number: number;
  label: string;
  icon: string;
  scrollYProgress: MotionValue<number>
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const content = useTransform(scrollYProgress, [0.1, 0.9], [0, number + 1]);
  const icons = require.context('../../images/', false);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = '0';
    }
    scrollYProgress.onChange(val=> console.log("val", val))
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
    return () => {
      content.destroy();
    };
  }, [content, number]);

  return (
    <div className="col-span-1 flex flex-col min-w-[220px] p-4 rounded-lg">
      <img
        className="mx-auto"
        alt={icon}
        width="150"
        height="150"
        src={icons(`./${icon}.svg`)}
      />
      <div ref={ref} className="text-7xl mt-3 text-primary" />
      <div className="text-2xl opacity-80">{label}</div>
    </div>
  );
};
