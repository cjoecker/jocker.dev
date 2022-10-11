import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';

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
    <MainContainer>
      <SentencesWrapper>
        {LANGUAGES.map(({ sentence }, index) => {
          return (
            <SentenceWrapper
              key={sentence}
              animate={{
                scale: selectedSentence === index ? 1.2 : 1,
                transition: { type: 'spring', stiffness: 600 },
              }}
            >
              <LanguagesText
                variant={'body1'}
                isCorrect={correctAnswers.has(index)}
              >
                {sentence}
              </LanguagesText>
            </SentenceWrapper>
          );
        })}
      </SentencesWrapper>

      <FlagsContainer>
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
              <FlagImage
                width={30}
                height={30}
                alt={`${language} language flag`}
                src={flagImages(`./${language}.svg`)}
                isCorrect={correctAnswers.has(position)}
              />
            </motion.div>
          );
        })}
      </FlagsContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const SentencesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;
const SentenceWrapper = styled(motion.div)`
  flex: 1;
  margin-top: 10px;
`;
const FlagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const LanguagesText = styled(Typography)<{
  isCorrect: boolean;
}>`
  flex: 1;
  opacity: ${p => (p.isCorrect ? '50%' : undefined)};
`;

const FlagImage = styled.img<{
  isCorrect: boolean;
}>`
  opacity: ${p => (p.isCorrect ? '50%' : undefined)};
  padding: 10px;
`;
