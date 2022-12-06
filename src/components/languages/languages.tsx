import { useEffect, useMemo, useState } from 'react';

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
    <div className="h-48 relative w-72">
      <div className="w-full h-full">
        <Canvas
          languagesNumber={LANGUAGES.length}
          onLanguageDown={onLanguageDown}
          onLanguageUp={onLanguageUp}
          onLanguageHover={languagePosition => {
            setHoveringLanguage(languagePosition);
          }}
          isAnswerCorrect={isAnswerCorrect}
        />
      </div>
      <LanguageLabels
        selectedSentence={selectedSentence}
        correctAnswers={correctAnswers}
        hoveringLanguage={hoveringLanguage}
        shuffledSentences={shuffledSentences}
      />
      <div className="flex justify-center items-center flex-col h-full w-full absolute top-0 left-0 pointer-events-none">
        <img height={65} width={130} alt={'pen drawing a line'} src={Pen} />
      </div>
    </div>
  );
};

function getShuffledSentences(languages: Language[]) {
  return languages
    .map((l, index) => ({ value: index, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
