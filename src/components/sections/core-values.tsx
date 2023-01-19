import { motion } from 'framer-motion';

import { CoreValuesData, CoreValuesType } from '../../constants/core-values';
import meditatingImage from '../../images/meditating.png';
import { Section } from '../shared/section';

export const CoreValues = () => {
  return (
    <Section title="Core Values">
      <div className="flex relative flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ amount: 'some' }}
          transition={{
            staggerChildren: 0.3,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-y-6 gap-x-16"
        >
          {CoreValuesData.map(value => {
            return <CoreValue key={value.coreValue} coreValue={value} />;
          })}
        </motion.div>
        <div className="m-auto px-2">
          <motion.img
            className="w-full max-w-[350px] h-auto mt-6 sm:-mt-5"
            src={meditatingImage}
            alt="avatar of myself meditating"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 'some' }}
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
