import { motion } from 'framer-motion';

import {
  OpenSourceContributions,
  OwnApps,
} from '../../constants/contributions';
import { Section } from '../shared/section';
import { Tooltip } from '../shared/tooltip';

export const Contributions = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section title="Community Contributions">
      <div className="flex flex-wrap gap-x-4 gap-y-16 max-w-[750px] mx-auto">
        <div className="flex flex-1 relative flex-col min-w-[300px]">
          <h3 className="text-xl mb-4">My Apps</h3>
          <div className="flex">
            <motion.div
              className="grid grid-cols-2 m-auto gap-4"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ amount: 0.9 }}
              transition={{
                staggerChildren: 0.3,
              }}
            >
              {OwnApps.map(app => {
                return (
                  <motion.div
                    className="col-span-1 flex flex-col"
                    key={app.name}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                  >
                    <Tooltip text={app.description}>
                      <motion.button
                        whileTap={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-xl hover:cursor-pointer mx-auto"
                        onClick={() => window.open(app.link, '_blank')}
                        style={{
                          backgroundImage: `url(${icons(`./${app.icon}`)})`,
                        }}
                      />
                    </Tooltip>
                    <p className="max-w-[100px]">{app.name}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-1 relative flex-col min-w-[300px]">
          <h3 className="text-xl mb-4">Open Source Contributions</h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.9 }}
            transition={{
              staggerChildren: 0.3,
            }}
            className="flex flex-col gap-12 m-auto"
          >
            {OpenSourceContributions.map(contribution => {
              return (
                <motion.button
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  key={contribution.name}
                  className="hover:cursor-pointer"
                  onClick={() => window.open(contribution.link, '_blank')}
                >
                  <img
                    alt={`${contribution.name} logo`}
                    width="50"
                    height="50"
                    className="max-h-[100px] w-auto"
                    src={icons(`./${contribution.icon}`)}
                  />
                  <p className="text-2xl">{contribution.name}</p>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
