import { Paper } from '@mui/material';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Language, LANGUAGES } from '../../constants/languages';

import { Canvas } from './canvas';
import Pen from './images/pen.svg';
import { LanguageLabels } from './language-labels';

export const Languages = () => {
  const shuffledSentences = useMemo(() => getShuffledSentences(LANGUAGES), []);
  const [selectedSentence, setSelectedSentence] = useState<
    number | undefined
  >();
  const [correctAnswers, setCorrectAnswers] = useState(new Set<number>());
  const [hoveringLanguage, setHoveringLanguage] = useState<number | undefined>(
    undefined
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    setIsAnswerCorrect(
      hoveringLanguage !== undefined &&
        shuffledSentences[hoveringLanguage] === selectedSentence
    );
  }, [hoveringLanguage, selectedSentence, shuffledSentences]);
  const onLanguageUp = () => {
    if (selectedSentence !== undefined && isAnswerCorrect) {
      setCorrectAnswers(correctSentences =>
        correctSentences.add(selectedSentence)
      );
    }
    setSelectedSentence(undefined);
    setHoveringLanguage(undefined);
    setIsAnswerCorrect(false);
  };

  const onLanguageDown = (languagePosition: number) => {
    setHoveringLanguage(languagePosition);
    setSelectedSentence(languagePosition);
  };

  return (
    <MainContainer>
      <CanvasWrapper>
        <Canvas
          languagesNumber={LANGUAGES.length}
          onLanguageDown={onLanguageDown}
          onLanguageUp={onLanguageUp}
          onLanguageHover={languagePosition => {
            setHoveringLanguage(languagePosition);
          }}
          isAnswerCorrect={isAnswerCorrect}
        />
      </CanvasWrapper>
      <LanguageLabels
        selectedSentence={selectedSentence}
        correctAnswers={correctAnswers}
        hoveringLanguage={hoveringLanguage}
        shuffledSentences={shuffledSentences}
      />
      <BackgroundContainer>
        <img height={65} width={130} alt={'pen drawing a line'} src={Pen} />
      </BackgroundContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Paper)`
  width: 600px;
  height: 200px;
  position: relative;
`;
const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

function getShuffledSentences(languages: Language[]) {
  return languages
    .map((l, index) => ({ value: index, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
