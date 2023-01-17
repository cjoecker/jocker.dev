import { motion } from 'framer-motion';
import { ContactInformation } from '../constants/content';

export const Contact = () => {
  const icons = require.context('../images/', false);
  return (
    <div className="w-full flex flex-col mt-36">
      <h2 className="text-primary text-4xl font-normal">Contact me!</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.9 }}
        transition={{
          staggerChildren: 0.1,
        }}
        className="flex gap-8 flex-wrap mt-8 mx-auto mb-8"
      >
        {ContactInformation.map(info => {
          return (
            <motion.div
              key={info.text}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
            >
              <motion.button
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  window.location.href = info.href;
                }}
                className=" bg-tag rounded-full w-16 h-16 flex cursor-pointer p-3"
              >
                <img
                  width="84"
                  height="84"
                  alt={info.text}
                  src={icons(`./${info.icon}.svg`)}
                  className="m-auto w-full h-full"
                />
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
