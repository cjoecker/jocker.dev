import { motion } from 'framer-motion';

import {
  ContactInformation,
  ContactInformationType,
} from '../../constants/contact-information';
import { Section } from '../shared/section';

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
        className="flex gap-8 flex-wrap mx-auto justify-center"
      >
        <div className="flex gap-8 flex-wrap justify-center">
          <ContactButton contactInformation={ContactInformation[0]} />
          <ContactButton contactInformation={ContactInformation[1]} />
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
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
        whileTap={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          window.location.href = contactInformation.href;
        }}
        className="bg-contact rounded-full w-16 h-16 flex cursor-pointer p-3"
      >
        <img
          loading="lazy"
          width="84"
          height="84"
          alt={contactInformation.text}
          src={icons(`./${contactInformation.icon}.svg`)}
          className="m-auto w-full h-full"
        />
      </motion.button>
    </motion.div>
  );
};
