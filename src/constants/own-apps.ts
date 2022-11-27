export interface OwnAppsType {
  name: string;
  description: string;
  link: string;
  icon: string;
}

export const OWN_APPS: OwnAppsType[] = [
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