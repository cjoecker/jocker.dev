export const education: EducationType[] = [
  {
    logo: 'th-wildau.svg',
    logoHeight: 55,
    title: 'Mechanical Engineering (B. Eng.)',
    location: 'Wildau, Germany',
    startDate: new Date('2011-09'),
    endDate: new Date('2014-08'),
  },
  {
    logo: 'scmt.svg',
    logoHeight: 60,
    title: 'Master of Business Engineering (MBE®)',
    location: 'Filderstadt, Germany',
    startDate: new Date('2016-02'),
    endDate: new Date('2018-04'),
  },
];

export const funFacts: string[] = [
  'I learned to program when I was 9 when my father gave away my dog. I made a website full of pictures of my dog',
  'My friends from school always called me "Joker" and they still do it.',
  'I have a YouTube video with 1.2 million views that I did when I was 12',
];

export const LanguagesData: LanguagesType[] = [
  {
    language: 'English',
    level: 'Fluent',
    icon: 'hamburguer.svg',
  },
  {
    language: 'German',
    level: 'Fluent',
    icon: 'pretzel.svg',
  },
  {
    language: 'Spanish',
    level: 'Fluent',
    icon: 'paella.svg',
  },
  {
    language: 'Portuguese',
    level: 'Good command',
    icon: 'feijoada.svg',
  },
];

export const WorkExperienceData: WorkExperienceType[] = [
  {
    logo: 'kuka.svg',
    logoHeight: 20,
    link: 'https://www.kuka.com/',
    title: 'Software Engineer - Virtual Commissioning',
    startDate: new Date('2015-02'),
    endDate: new Date('2018-04'),
    location: 'Augsburg, Germany',
  },
  {
    logo: 'kuka.svg',
    logoHeight: 20,
    link: 'https://www.kuka.com/',
    title: 'Area Manager  - Virtual Commissioning',
    startDate: new Date('2018-04'),
    endDate: new Date('2019-05'),
    location: 'Augsburg, Germany',
  },
  {
    logo: 'maibornwolff.svg',
    logoHeight: 50,
    link: 'https://www.maibornwolff.de/',
    title: 'Senior Software Engineer',
    startDate: new Date('2019-05'),
    endDate: new Date('2023-02'),
    location: 'Munich, Germany',
  },
  {
    logo: 'me-with-macbook.webp',
    logoHeight: 50,
    link: 'https://www.linkedin.com/in/christianjoecker/',
    title: 'Freelance Frontend Engineer and UX/UI Designer',
    startDate: new Date('2023-02'),
    endDate: 'today',
    location: 'Valencia, Spain',
  },
];

export type EducationType = {
  logo: string;
  logoHeight: number;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date | 'today';
};

export type LanguagesType = {
  language: string;
  level: string;
  icon: string;
};

export type WorkExperienceType = {
  logo: string;
  logoHeight: number;
  link: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date | 'today';
};
