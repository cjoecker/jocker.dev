import {
  ConferenceType,
  ContactInformationType,
  CoreValuesType,
  CourseType,
  OpenSourceContributionsType,
  OwnAppsType,
} from './content.models';

export const DevSkills: string[] = [
  'React',
  'Angular',
  'TypeScript',
  'Javascript',
  'Remix',
  'Material-UI',
  'Jest',
  'Cypress',
  'Zustand',
  'Tailwind',
  'Azure',
  'Scrum',
];
export const UxSkills: string[] = [
  'Figma',
  'user tests',
  'user journey map',
  'personas',
  'accessibility',
  'red routes',
  'card sorting',
  'ideation workshops',
];

export const ContactInformation: ContactInformationType[] = [
  {
    icon: 'email',
    text: 'c.jocker@hotmail.com',
    href: 'mailto:c.jocker@hotmail.com',
  },
  {
    icon: 'linkedin',
    text: 'christianjoecker',
    href: 'https://www.linkedin.com/in/christianjoecker/',
  },
  {
    icon: 'twitter',
    text: '@JockerDev',
    href: 'https://twitter.com/JockerDev',
  },
  {
    icon: 'github',
    text: 'cjoecker',
    href: 'https://github.com/cjoecker',
  },
];

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

export const CoreValuesData: CoreValuesType[] = [
  {
    coreValue: 'Excellence',
    explanation:
      'Sustainable architecture, clean code, and great UX are my mantras.',
  },
  {
    coreValue: 'Accountable',
    explanation: 'I stand for my decisions, achievements and mistakes.',
  },
  {
    coreValue: 'Passion',
    explanation: 'I love what I do and you will notice it!',
  },
  {
    coreValue: 'Kindness',
    explanation: 'Always eager to help and understand the other side.',
  },
];

export const Courses: CourseType[] = [
  {
    name: 'Affinity Designer',
    instructor: 'Heiko Deppler',
    date: new Date('2019-01'),
  },
  {
    name: 'Agile Speed Refueling',
    instructor: 'MaibornWolff',
    date: new Date('2019-07'),
  },
  {
    name: 'Business Analysis',
    instructor: 'Jamal Moustafev',
    date: new Date('2019-07'),
  },
  {
    name: 'UX Ultimate Guide',
    instructor: ' Davis Travis',
    date: new Date('2019-09'),
  },
  {
    name: 'Your Performance, a Communication Seminar',
    instructor: 'Nadine Antler & Torsten Voller',
    date: new Date('2019-09'),
  },
  {
    name: 'Usability School',
    instructor: 'Kerstin Öchsner  & Victoria Müller',
    date: new Date('2019-10'),
  },
  {
    name: 'Projects Early Phases',
    instructor: 'Dr. Martina Beck',
    date: new Date('2019-12'),
  },
  {
    name: 'Big Pictures',
    instructor: 'Judith Eckerle',
    date: new Date('2020-01'),
  },
  {
    name: 'Architecture Foundation',
    instructor: 'Jan Schuhmacher',
    date: new Date('2020-02'),
  },
  {
    name: 'Frontend Architecture Foundation',
    instructor: 'Simon Ismair',
    date: new Date('2020-02'),
  },
  {
    name: 'Good Code',
    instructor: 'Michael P',
    date: new Date('2020-03'),
  },
  {
    name: 'Safe Programming',
    instructor: 'Philippe Schrettenbrunner',
    date: new Date('2020-03'),
  },
  {
    name: 'Sketchnoting',
    instructor: 'Carola Scharvogel',
    date: new Date('2020-06'),
  },
  {
    name: 'Hacking Workshop',
    instructor: 'MaibornWolff',
    date: new Date('2020-07'),
  },
  {
    name: 'Cultural Orientation',
    instructor: 'Rocio G. Luis',
    date: new Date('2021-02'),
  },
  {
    name: 'Cloud Instrumentation',
    instructor: 'MaibornWolff',
    date: new Date('2021-04'),
  },
  {
    name: 'Radical Honesty',
    instructor: 'Volker Rupp',
    date: new Date('2021-12'),
  },
  {
    name: 'Test Driven Development',
    instructor: 'Matt Greencroft',
    date: new Date('2019-06'),
  },
  {
    name: 'Docker and Kubernetes',
    instructor: 'Stephen Grider',
    date: new Date('2022-06'),
  },
  {
    name: 'Epic React',
    instructor: 'Kent C. Dodds',
    date: new Date('2020-06'),
  },
  {
    name: 'Testing Javascript',
    instructor: 'Kent C. Dodds',
    date: new Date('2020-06'),
  },
  {
    name: 'Praise at Eye Level',
    instructor: 'Stephanie Salecker',
    date: new Date('2022-09'),
  },
  {
    name: 'Communication Coaching',
    instructor: 'Moritz Weilandt',
    date: new Date('2022-05'),
  },
  {
    name: 'Liberating Structures',
    instructor: 'Elisabeth Kistler',
    date: new Date('2021-02'),
  },
  {
    name: 'Voice Training',
    instructor: 'Martin Richter',
    date: new Date('2019-08'),
  },
  {
    name: 'Professional Scrum with UX',
    instructor: 'Jeff Gothelf',
    date: new Date('2020-01'),
  },
  {
    name: 'Refactoring UI',
    instructor: 'Tailwind Labs Inc',
    date: new Date('2022-12'),
  },
];

export const Conferences: ConferenceType[] = [
  {
    name: 'React Miami',
    date: new Date('2022-04'),
  },
  {
    name: 'React Summit Amsterdam',
    date: new Date('2022-05'),
  },
  {
    name: 'Scrum Day Stuttgart',
    date: new Date('2020-05'),
  },
];
