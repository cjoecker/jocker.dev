export const StackOverflowDefaults: StackOverflowDefaults = {
  reputation: 4453,
  goldBadge: 1,
  silverBadge: 34,
  bronzeBadge: 40,
  profileUrl: 'https://stackoverflow.com/users/4934446',
};

export const OpenSourceContributions: OpenSourceContributionsType[] = [
  {
    name: 'MUI (Material-UI)',
    link: 'https://mui.com/',
    icon: 'mui.svg',
  },
  {
    name: 'Framer Motion',
    link: 'https://www.framer.com/motion/',
    icon: 'framer-motion.svg',
  },
];

export const OwnApps: OwnAppsType[] = [
  {
    name: 'd-cide',
    description: 'Rational decision making made easy.',
    link: 'https://d-cide.me/',
    icon: 'd-cide.svg',
  },
  {
    name: 'Core Values Finder',
    description: 'Give a name to your core values.',
    link: 'https://cjoecker.github.io/core-values-finder/',
    icon: 'core-values-finder.svg',
  },
  {
    name: '3 Point Estimator',
    description: 'Make effort estimations in a safe and easy way.',
    link: 'https://cjoecker.github.io/3-point-estimator/',
    icon: '3-point-estimator.svg',
  },
  {
    name: 'Curriculum Generator',
    description: 'Generate your CV in neumorphic style',
    link: 'https://github.com/cjoecker/curriculum-generator',
    icon: 'curriculum-generator.svg',
  },
];

export interface StackOverflowDefaults {
  reputation: number;
  goldBadge: number;
  silverBadge: number;
  bronzeBadge: number;
  profileUrl: string;
}

export interface OwnAppsType {
  name: string;
  description: string;
  link: string;
  icon: string;
}

export interface OpenSourceContributionsType {
  name: string;
  link: string;
  icon: string;
}
