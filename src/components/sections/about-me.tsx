import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { EXPERIENCE_YEARS } from '../../constants/experience-and-education';
import { Section } from '../shared/section';
import { AboutMeData } from '../../constants/about-me';
import Signature from "../../images/signature.svg";

export const AboutMe = () => {
  return (
    <Section title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-6 rounded-2xl p-6 bg-about-me mx-auto overflow-hidden">
        <div className="col-span-1 inline-block md:hidden">
          <Photo/>
        </div>
        <div className="col-span-1 md:col-span-3 text-left">
          <h3 className="text-3xl mb-4">Hi, I'm Christian...</h3>
          <div className="text-lg text-justify">{AboutMeData}</div>
          <img
            loading="lazy"
            className="mt-4 ml-2"
            height={55}
            width={248}
            alt="handwritten name"
            src={Signature}
          />
        </div>
        <div className="col-span-2 hidden md:inline-block">
          <Photo/>
        </div>
      </div>
    </Section>
  );
};

export const Photo = () => {
  const icons = require.context('../../images/', false);
  return (
    <img
      loading="lazy"
      className="rounded-2xl w-full h-full object-cover"
      height={512}
      width={384}
      alt="stack overflow logo"
      src={icons(`./christian.jpeg`)}
    />
  );
};
