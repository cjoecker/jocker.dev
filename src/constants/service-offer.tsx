import React from 'react';

import { Paragraph } from '../components/shared/paragraph';

import { EXPERIENCE_YEARS } from './experience-and-education';

export const ServiceOfferData: ServiceOfferType[] = [
  {
    logo: 'face-with-sunglasses.svg',
    title: 'Web Applications',
    description: (
      <>
        <Paragraph>
          Get ready for a platform that's not just good-looking, but built to
          last!
        </Paragraph>
        <Paragraph>
          Let me take your idea from concept to launch, delivering a scalable
          solution tailored to your business.
        </Paragraph>
        <Paragraph>
          Say goodbye to clumsy web applications and prepare for a digital
          experience that will make your users say WOW!
        </Paragraph>
      </>
    ),
  },
  {
    logo: 'artist.svg',
    title: 'UX/UI Design',
    description: (
      <>
        <Paragraph>
          I'll take your digital dreams and turn them into pixel-perfect
          realities that not only look good, but feel great too.
        </Paragraph>
        <Paragraph>
          I'll make sure that every click, tap, and swipe is a delightful
          experience for your customers.
        </Paragraph>
        <Paragraph>Sit back, relax, and let the magic begin!</Paragraph>
      </>
    ),
  },
  {
    logo: 'robot.svg',
    title: 'IoT Platforms',
    description: (
      <>
        <Paragraph>
          Step into the future with my IoT platform expertise! Let's turn your
          ideas into cutting-edge solutions that connect the physical world to
          the digital one.
        </Paragraph>
        <Paragraph>
          Whether you're looking to connect your devices, revolutionize your
          business, or simply unleash your inner tech-savant, I've got you
          covered.
        </Paragraph>
      </>
    ),
  },
  {
    logo: 'rocket.svg',
    title: 'Rapid Application Development',
    description: (
      <>
        <Paragraph>
          With a focus on speed and efficiency, I'll take your ideas and turn
          them into fully-functional, scalable solutions before you can say
          "launch day".
        </Paragraph>
        <Paragraph>
          Perfect for proof of concepts or MVPs, my solutions will help you
          validate your ideas and get to market faster than you ever thought
          possible.
        </Paragraph>
      </>
    ),
  },
  {
    logo: 'strategy.svg',
    title: 'Digital Strategy Consulting',
    description: (
      <>
        <Paragraph>
          With over {EXPERIENCE_YEARS} years of experience in the tech industry
          and a track record of success with digital products across multiple
          industries, I've got the expertise you need to succeed.
        </Paragraph>
        <Paragraph>
          If you're looking to launch a new product, reinvigorate an existing
          one, or simply up your game, I'll help you map out a roadmap for
          success.
        </Paragraph>
      </>
    ),
  },
];

export type ServiceOfferType = {
  logo: string;
  title: string;
  description: JSX.Element;
};
