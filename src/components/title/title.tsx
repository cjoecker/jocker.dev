import { TitleText } from './title-text';
import { TransparentBox } from '../shared/TransparentBox';

export const Title = () => {
  return (
    <TransparentBox>
      <TitleText type={'title'} text="Christian Jöcker" />
      <TitleText
        type={'subtitle'}
        text="Frontend Developer and UX/UI Designer"
      />
    </TransparentBox>
  );
};
