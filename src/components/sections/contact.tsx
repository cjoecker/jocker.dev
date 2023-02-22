import { motion } from 'framer-motion';

import {
  ContactInformation,
  ContactInformationType,
} from '../../constants/contact-information';
import { Section } from '../shared/section';
import React from "react";

export const Contact = () => {
  return (
    <Section title="Contact Me!">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        transition={{
          staggerChildren: 0.1,
        }}
        className="flex gap-9 flex-wrap mx-auto justify-center"
      >
        <div className="flex gap-9 flex-wrap justify-center">
          <ContactButton contactInformation={ContactInformation[0]} />
          <ContactButton contactInformation={ContactInformation[1]} />
        </div>
        <div className="flex gap-9 flex-wrap justify-center">
          <ContactButton contactInformation={ContactInformation[2]} />
          <ContactButton contactInformation={ContactInformation[3]} />
        </div>
      </motion.div>
    </Section>
  );
};

export const ContactButton = ({
  contactInformation,
}: {
  contactInformation: ContactInformationType;
}) => {
  const icons = require.context('../../images/', false);
  return (
    <motion.div
      key={contactInformation.text}
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }}
    >
      <motion.button
        style={{ boxShadow: '0px 0px 40px -8px #00DFD866' }}
        aria-label={contactInformation.text}
        whileTap={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        onClick={(e: React.MouseEvent) => {
          (e.target as HTMLButtonElement).blur();
          window.open(contactInformation.href, '_blank');
        }}
        className="p-0.5 h-20 w-20 flex rounded-full font-semibold text-lg hover:cursor-pointer select-none bg-gradient-to-br from-turquoise to-blue"
      >
        <div className="flex w-full h-full rounded-full bg-[#000] bg-opacity-80 pointer-events-none">
          <div className="m-4">
            <img
              loading="lazy"
              width="84"
              height="84"
              alt={contactInformation.text}
              src={icons(`./${contactInformation.icon}.svg`)}
              className="w-full h-full select-none pointer-events-none"
            />
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};
