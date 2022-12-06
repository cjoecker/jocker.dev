import { motion } from 'framer-motion';

export type TitleProps = {
  text: string;
  type: 'title' | 'subtitle';
};
export const TitleText = ({ text, type }: TitleProps) => {
  const variant = type === 'title' ? 'h1' : 'h2';
  const TitleTag = variant as keyof JSX.IntrinsicElements;;

  const getMargin = (variant: 'h1' | 'h2', istLastWord: boolean) => {
    if (istLastWord) {
      return 'mr-0';
    }
    if (variant === 'h1') {
      return 'mr-3';
    } else {
      return 'mr-2';
    }
  };
  return (
    <TitleTag
      className={`flex m-0 flex-wrap justify-center font-light mb-1 last:mb-0 ${type === 'title' ? 'white text-4xl' : 'text-sky-400 text-2xl'}`}
    >
      {text.split(' ').map((word, wordIdx) => (
        <div
          className={`flex ${getMargin(
            variant,
            wordIdx === text.split(' ').length
          )}`}
          key={`${word}${wordIdx}`}
        >
          {word.split('').map((letter, index) => (
            <motion.span
              key={index}
              style={{ cursor: 'grab' }}
              drag
              dragMomentum={false}
              whileHover={{
                rotate: index % 2 ? -3 : 3,
                scale: 1.5,
                transition: { type: 'spring', stiffness: 600 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      ))}
    </TitleTag>
  );
};
