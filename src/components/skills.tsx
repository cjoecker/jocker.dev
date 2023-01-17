import { motion } from 'framer-motion';

import { DevSkills, UxSkills } from '../constants/content';

export const Skills = () => {
  return (
    <div className="w-full flex flex-col mt-36">
      <h2 className="text-primary text-4xl font-normal mb-2">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <Tags skills={DevSkills} title="Web Development" />
        <Tags skills={UxSkills} title="UX/UI Design" />
      </div>
    </div>
  );
};

export const Tags = ({
  skills,
  title,
}: {
  skills: string[];
  title: string;
}) => {
  return (
    <div className="mt-4 col-span-1">
      <h3 className="text-xl text-left mb-4">{title}</h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.9 }}
        transition={{
          staggerChildren: 0.1,
        }}
        className="flex gap-4 text-left flex-wrap"
      >
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
              className="bg-tag inline-block rounded-full px-3 text-lg capitalize"
            >
              {skill}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
