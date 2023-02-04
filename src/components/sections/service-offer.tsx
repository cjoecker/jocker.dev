import { Section } from '../shared/section';
import { ServiceOfferData } from '../../constants/service-offer';
import { motion } from 'framer-motion';

export const ServiceOffer = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section title="What I Can Do for You">
      <div className="flex flex-col gap-12">
        {ServiceOfferData.map((offer, index) => {
          const isOdd = index % 2 === 0;
          const Image = () => {
            return (
              <img
                loading="lazy"
                width="150"
                height="150"
                src={icons(`./${offer.image}`)}
                className="select-none pointer-events-none mx-12"
              />
            );
          };
          return (
            <div className={`flex mx-auto ${isOdd ? 'text-left' : 'text-right'}`}>
              {isOdd && <Image />}
              <div className="max-w-md">
                <h3 className="mb-4">{offer.title}</h3>
                <div>{offer.explanation}</div>
              </div>
              {!isOdd && <Image />}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
