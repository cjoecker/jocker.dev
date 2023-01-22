type WorkExperienceType = {
  logo: string;
  link: string;
  position: string;
  location: string;
  startDate: Date;
  endDate: Date | 'today';
};

export const WorkExperience: WorkExperienceType[] = [
  {
    logo: 'me-with-macbook.webp',
    link: 'https://www.linkedin.com/in/christianjoecker/',
    position: 'Freelance Frontend Engineer and UX/UI Designer',
    startDate: new Date('2023-02'),
    endDate: 'today',
    location: 'Valencia, Spain'
  },
  {
    logo: 'maibornwolff.svg',
    link: 'https://www.maibornwolff.de/',
    position: 'Senior Software Engineer',
    startDate: new Date('2019-06'),
    endDate: new Date('2023-02'),
    location: 'Munich, Germany'
  },
  {
    logo: 'kuka.svg',
    link: 'https://www.kuka.com/',
    position: 'Area Manager - Virtual Commissioning',
    startDate: new Date('2018-04'),
    endDate: new Date('2019-05'),
    location: 'Augsburg, Germany'
  },
  {
    logo: 'kuka.svg',
    link: 'https://www.kuka.com/',
    position: 'Software Engineer - Virtual Commissioning',
    startDate: new Date('2015-02'),
    endDate: new Date('2018-03'),
    location: 'Augsburg, Germany'
  },
];
