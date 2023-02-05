import { Section } from '../shared/section';
import {
  ServiceOfferData,
  ServiceOfferType,
} from '../../constants/service-offer';
import { LayoutGroup, motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

export const ServiceOffer = () => {
  return (
    <Section title="What I Can Do for You">
      <div className="flex gap-4 mx-auto flex-wrap justify-center max-w-3xl">
        {ServiceOfferData.map(offer => {
          const [isOpen, setIsOpen] = useState(false);
          return (
            <div key={offer.title}>
              {isOpen && <Card offer={offer} isOpen={isOpen} />}
              <motion.div
                onClick={() => setIsOpen(!isOpen)}
                layout
                className={`${
                  isOpen && 'fixed top-0 left-0 right-0 bottom-0 flex z-10'
                }`}
              >
                <Card isExpandable offer={offer} isOpen={isOpen} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Card = ({
  isExpandable,
  offer,
  isOpen,
}: {
  isExpandable?: boolean;
  offer: ServiceOfferType;
  isOpen: boolean;
}) => {
  const icons = require.context('../../images/', false);
  return (
    <motion.div
      layout={isExpandable}
      className={`flex rounded-2xl shadow-md bg-light-grey 
              text-left p-4 whitespace-pre-wrap 
              ${
                isOpen && isExpandable
                  ? 'w-full h-auto m-auto max-w-lg flex'
                  : 'h-40 w-40 flex-col'
              } ${isOpen && !isExpandable ? 'invisible' : 'visible'}`}
    >
      <motion.img
        layout={isExpandable ? 'preserve-aspect' : false}
        loading="lazy"
        width={'70'}
        height={'70'}
        src={icons(`./${offer.image}`)}
        className={`select-none pointer-events-none ${
          isOpen ? 'w-[150px] h-[150px] my-auto mx-4' : 'w-[70px] h-[70px] my-4'
        }`}
      />
      <motion.div layout={isExpandable}>
        <motion.h3
          layout={isExpandable ? 'preserve-aspect' : false}
          className={isOpen ? 'text-2xl mt-4':'mb-1 text-lg'}
        >
          {offer.title}
        </motion.h3>
        {isOpen && (
          <motion.div className="my-2">{offer.explanation.replaceAll('  ', '')}</motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
