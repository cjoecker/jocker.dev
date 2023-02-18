import { AboutMeData } from '../../constants/about-me';
import Signature from '../../images/signature.svg';
import { Section } from '../shared/section';

export const AboutMe = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-5 max-w-4xl gap-x-9 gap-y-6 rounded-2xl p-6 mx-auto overflow-hidden">
        <div className="col-span-1 sm:col-span-2">
          <img
            loading="lazy"
            className="rounded-2xl w-full h-full object-cover shadow-lg-purple -rotate-2"
            height={512}
            width={384}
            alt="christian"
            src={icons(`./christian.webp`)}
          />
        </div>
        <div className="col-span-1 sm:col-span-3 text-left my-auto">
          <h3 className="text-xl mb-4">About me</h3>
          <div className="text-base">{AboutMeData}</div>
          <img
            loading="lazy"
            className="mt-4"
            height={50*0.8}
            width={280*0.8}
            alt="handwritten name"
            src={Signature}
          />
        </div>
      </div>
    </Section>
  );
};
