import { motion } from 'framer-motion';

import { CoreValuesData, CoreValuesType } from '../../constants/core-values';
import meditatingImage from '../../images/meditating.webp';
import { Section } from '../shared/section';
import MeshPurpleTurquoise from "../../images/mesh-purple-turquoise.svg";

export const CoreValues = () => {
  return (
    <Section title="Core Values">
      <div className="flex relative flex-col">
        <div className="relative flex">
          <img
            aria-hidden="true"
            className=" absolute mx-auto top-0 translate-y-[-35%] translate-x-[-32%] sm:translate-x-0 sm:w-[300%] sm:w-[100%] h-[300%]"
            src={MeshPurpleTurquoise}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            transition={{
              staggerChildren: 0.3,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-y-12 gap-x-16"
          >
            {CoreValuesData.map(value => {
              return <CoreValue key={value.coreValue} coreValue={value} />;
            })}
          </motion.div>
        </div>
        <div className="m-auto px-2">
          <motion.img
            loading="lazy"
            width="350"
            height="260"
            className="w-full max-w-[350px] h-auto mt-12 sm:-mt-5"
            src={meditatingImage}
            alt="avatar of myself meditating"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          />
        </div>
      </div>
    </Section>
  );
};

const CoreValue = ({ coreValue }: { coreValue: CoreValuesType }) => {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="flex flex-col align-top max-w-[190px] col-span-1"
    >
      <h3>{coreValue.coreValue}</h3>
      <p>{coreValue.explanation}</p>
    </motion.div>
  );
};
