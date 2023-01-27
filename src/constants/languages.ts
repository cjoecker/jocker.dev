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

export type LanguagesType = {
  language: string;
  level: string;
  icon: string;
};
