import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { EXPERIENCE_YEARS } from '../../constants/experience-and-education';
import MeshPurple from '../../images/mesh-purple.svg';
import { Section } from '../shared/section';
export const Facts = () => {
  return (
    <Section>
      <div className="relative flex mt-52">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8 justify-between mx-auto flex-wrap">
          <Fact
            number={EXPERIENCE_YEARS}
            label={'Years of Experience'}
            icon="strong"
          />
          <Fact number={23} label={'Developed Apps'} icon="smartphone" />
          <Fact number={13} label={'Happy Customers'} icon="happy" />
        </div>
      </div>
    </Section>
  );
};

const Fact = ({
  number,
  label,
  icon,
}: {
  number: number;
  label: string;
  icon: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const content = useTransform(scrollYProgress, [0.9, 0.6], [0, number + 1]);
  const icons = require.context('../../images/', false);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = '0';
    }
    content.onChange(val => {
      if (!ref.current) {
        return;
      }
      if (val >= number) {
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
    <div className="col-span-1 flex flex-col min-w-[220px] p-4 rounded-lg relative">
      <img
        aria-hidden="true"
        alt=""
        height={800}
        width={600}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[200%] h-[200%]"
        src={MeshPurple}
      />
      <motion.img
        loading="lazy"
        className="mx-auto"
        alt={icon}
        width="150"
        height="150"
        src={icons(`./${icon}.svg`)}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.9, once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      />
      <div ref={ref} className="text-2xl mt-3 font-semibold" />
      <div className="text-xl mt-4">{label}</div>
    </div>
  );
};
