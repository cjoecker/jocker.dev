import { TitleText } from './title-text';

export const Title = () => {
  return (
    <>
      <TitleText type={'title'} text="Christian Jöcker" />
      <TitleText
        type={'subtitle'}
        text="Frontend Developer and UX/UI Designer"
      />
    </>
  );
};
