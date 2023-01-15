import { motion } from 'framer-motion';

export const Title = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="m-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-6xl font-normal text-primary"
        >
          Christian Jöcker
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="font-normal mt-1"
        >
          Frontend Developer & UX/UI Designer
        </motion.h2>
      </div>
    </div>
  );
};
