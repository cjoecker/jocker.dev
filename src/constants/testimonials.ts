const testimonialsShort: TestimonialsType[] = [
  {
    testimonial: `aaaChristian is a very creative person with attention to details. 
    He really puts effort in developing what makes sense for the end user. 
    He is also a fan of clean code and good architecture.`,
    person: 'David Forino',
    photo: 'paula.webp',
    companyLogo: 'maibornwolff.svg',
    title: 'CTO and co-founder',
  },
  {
    testimonial: `He perfectly embodies the role of a skilled Front-End developer, 
    who not only masters his technologies but also has amazing UX know-how. 
    Always up to date with the latest trends and usability methods, 
    together with his solution-oriented attitude, he is a great enrichment for the team.`,
    person: 'Paula Montesa Rausell',
    photo: 'paula.webp',
    companyLogo: 'maibornwolff.svg',
    title: 'Lead Digital Design Engineer',
  },
  {
    testimonial: `Christian is a very creative person with attention to details. 
    He really puts effort in developing what makes sense for the end user. 
    He is also a fan of clean code and good architecture.`,
    person: 'David Forino',
    photo: 'paula.webp',
    companyLogo: 'maibornwolff.svg',
    title: 'CTO and co-founder',
  },
];
export const testimonials: TestimonialsType[] = [
  ...testimonialsShort,
  ...testimonialsShort,
];
export type TestimonialsType = {
  testimonial: string;
  person: string;
  photo: string;
  companyLogo: string;
  title: string;
};
