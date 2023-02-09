import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { EXPERIENCE_YEARS } from '../../constants/experience-and-education';
import { Section } from '../shared/section';
import { AboutMeData } from '../../constants/about-me';
import Signature from "../../images/signature.svg";

export const AboutMe = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section title="Who I am">
      <div className="flex flex-wrap-reverse gap-x-10 gap-y-6 rounded-2xl p-6 bg-about-me mx-auto overflow-hidden">
        <div style={{flex:5}} className="text-justify">
          <h3 className="text-3xl mb-4">Hi, I'm Christian...</h3>
          <div className="text-lg">{AboutMeData}</div>
          <img
            loading="lazy"
            className="mt-1 ml-2"
            height={55}
            width={248}
            alt="handwritten name"
            src={Signature}
          />
        </div>
        <div style={{flex:2}}  className="min-w-[300px]">
          <img
            loading="lazy"
            className="rounded-2xl w-full h-full object-cover"
            height={512}
            width={384}
            alt="stack overflow logo"
            src={icons(`./christian.jpeg`)}
          />
        </div>

      </div>
    </Section>
  );
};
