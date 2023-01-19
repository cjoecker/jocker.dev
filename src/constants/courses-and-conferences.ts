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

export type CourseType = {
  name: string;
  instructor: string;
  date: Date;
};

export type ConferenceType = {
  name: string;
  date: Date;
};
