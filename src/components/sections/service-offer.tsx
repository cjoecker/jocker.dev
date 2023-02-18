import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  ServiceOfferData,
  ServiceOfferType,
} from '../../constants/service-offer';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';
import MeshPurple from "../../images/mesh-purple.svg";
import MeshTurquoise from "../../images/mesh-turquoise.svg";
import MeshPurpleTurquoise from "../../images/mesh-purple-turquoise.svg";

export const ServiceOffer = () => {
  return (
    <Section title="What I Can Do for You" className={"mt-16"}>
      <div className="flex gap-6 mx-auto flex-wrap justify-center max-w-3xl relative">
        <img
          aria-hidden="true"
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[200%] h-[200%]"
          src={MeshPurpleTurquoise}
        />

        {ServiceOfferData.map(offer => {
          return <Card key={offer.title} offer={offer} />;
        })}
      </div>
    </Section>
  );
};

const Card = ({ offer }: { offer: ServiceOfferType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const onClick = () => {
    if (isOpen) {
      setIsOpen(false);
      //avoid card appear below the other while closing
      setTimeout(() => setZIndex(0), 500);
    } else {
      setIsOpen(true);
      setZIndex(10);
    }
  };
  return (
    <div key={offer.title}>
      {isOpen && (
        <div className="z-0 relative">
          <CardContent offer={offer} isOpen={isOpen} />
        </div>
      )}
      <motion.div
        onClick={onClick}
        style={{ zIndex }}
        layout
        className={` ${
          isOpen
            ? 'fixed top-0 left-0 right-0 bottom-0 flex z-10 mx-3'
            : 'relative z-0'
        }`}
      >
        <CardContent isExpandable offer={offer} isOpen={isOpen} />
      </motion.div>
    </div>
  );
};

const CardContent = ({
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
      className={`flex rounded-2xl bg-gradient-to-br from-neutral to-neutral-dark border-solid border-secondary/10 border-2 cursor-pointer
              text-left p-4 whitespace-pre-wrap relative
              ${
                isOpen && isExpandable
                  ? 'w-full h-auto m-auto max-w-lg flex-wrap bg-gradient-to-br from-neutral/70 to-neutral-dark/70 backdrop-blur-xl'
                  : 'h-64 w-64 md:h-48 md:w-48 flex-col'
              } ${isOpen && !isExpandable ? 'invisible' : 'visible'}`}
    >
      <motion.button
        layout={isExpandable ? 'preserve-aspect' : false}
        aria-label={isOpen ? 'expand' : 'contract'}
        className={`absolute top-2.5 cursor-pointer right-2.5  p-2 ${
          isOpen ? 'h-7 w-7' : 'h-6 w-6'
        }`}
        style={{
          backgroundImage: `url(${icons(
            `./${isOpen ? 'contract' : 'expand'}.svg`
          )})`,
        }}
      />
      <motion.img
        layout={isExpandable ? 'preserve-aspect' : false}
        loading="lazy"
        alt={getAltTextFromFileName(offer.logo)}
        width={'70'}
        height={'70'}
        src={icons(`./${offer.logo}`)}
        className={`select-none pointer-events-none ${
          isOpen
            ? 'w-[170px] h-[170px] mb-auto mt-4 mx-4'
            : 'w-[105px] h-[105px] md:w-[70px] md:h-[70px] my-4'
        }`}
      />
      <motion.div
        className={`flex-1 ${isOpen ? 'min-w-[230px]' : 'min-w-0'}`}
        layout={isExpandable}
      >
        <motion.h3
          layout={isExpandable ? 'preserve-aspect' : false}
          className={isOpen ? 'text-lg mt-2 mb-2 text-base mr-4' : 'mb-1 text-xl md:text-lg'}
        >
          {offer.title}
        </motion.h3>
        {isOpen && (
          <motion.div className="my-2 text-base">{offer.description}</motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
