import { motion } from 'framer-motion';

import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';
import { LanguagesData } from '../../constants/languages';

export const Languages = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section title="Languages">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-20">
        {LanguagesData.map(language => {
          return (
            <div className="col-span-1" key={language.language}>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1, once: true }}
                transition={{ duration: 0.7 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                width="130"
                height="130"
                alt={getAltTextFromFileName(language.icon)}
                src={icons(`./${language.icon}`)}
              />
              <div className="font-bold text-3xl mt-2">{language.language}</div>
              <div className="text-2xl mt-1">{language.level}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
