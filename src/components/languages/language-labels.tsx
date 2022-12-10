import { motion } from 'framer-motion';

import { LANGUAGES } from '../../constants/languages';

export type Props = {
  selectedSentence: number | undefined;
  correctAnswers: Set<number>;
  hoveringLanguage: number | undefined;
  shuffledSentences: number[];
};
export const LanguageLabels = ({
  selectedSentence,
  correctAnswers,
  hoveringLanguage,
  shuffledSentences,
}: Props) => {
  const flagImages = require.context('./images', false);
  return (
    <div className="flex flex-col select-none absolute pointer-events-none top-0 left-0 justify-between w-full h-full">
      <div className="flex flex-row justify-around gap-1 m-2">
        {LANGUAGES.map(({ sentence }, index) => {
          return (
            <motion.div
              className="mt-2"
              key={sentence}
              animate={{
                scale: selectedSentence === index ? 1.2 : 1,
                transition: { type: 'spring', stiffness: 600 },
              }}
            >
              <div
                className={`flex-1 break-words ${
                  correctAnswers.has(index) ? 'opacity-50' : 'opacity-100'
                }`}
              >
                {sentence}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-row justify-around">
        {LANGUAGES.map((l, index) => {
          const position = shuffledSentences[index];
          const language = LANGUAGES[position].language;
          return (
            <motion.div
              animate={{
                scale: hoveringLanguage === index ? 1.3 : 1,
                transition: { type: 'spring', stiffness: 600 },
              }}
              key={language}
            >
              <img className={`p-4 w-12 h-12 ${
                correctAnswers.has(index) ? 'opacity-50' : 'opacity-100'
              }`}
                alt={`${language} language flag`}
                src={flagImages(`./${language}.svg`)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
