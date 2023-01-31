import { motion } from 'framer-motion';
import LightBulb from '../../images/light-bulb.svg';

export const Header = () => {
  return (
    <div className="h-screen w-full flex items-end relative">
      <div className="ml-24 mb-24 text-left ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-5xl font-normal"
        >
          Christian Jöcker
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="font-normal text-2xl mt-2"
        >
          Freelance Frontend Developer
          <br />& UX/UI Designer
        </motion.h2>
        <button className="bg-button-header rounded-full py-2 px-4 text-xl mt-6 text-light-grey">
          Discover More
        </button>
      </div>
      <img
        src={LightBulb}
        alt="light bulb shining"
        width="200"
        height="200"
        className="bg-light-bulb"
      />
    </div>
  );
};
