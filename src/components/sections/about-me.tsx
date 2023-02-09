import { AboutMeData } from '../../constants/about-me';
import Signature from '../../images/signature.svg';
import { Section } from '../shared/section';

export const AboutMe = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-6 rounded-2xl p-6 bg-about-me mx-auto overflow-hidden">
        <div className="col-span-1 md:col-span-2">
          <img
            loading="lazy"
            className="rounded-2xl w-full h-full object-cover"
            height={512}
            width={384}
            alt="christian"
            src={icons(`./christian.webp`)}
          />
        </div>
        <div className="col-span-1 md:col-span-3 text-left">
          <h3 className="text-3xl mb-4">Hi, I'm Christian...</h3>
          <div className="text-lg">{AboutMeData}</div>
          <img
            loading="lazy"
            className="mt-4 ml-2"
            height={55}
            width={248}
            alt="handwritten name"
            src={Signature}
          />
        </div>
      </div>
    </Section>
  );
};
