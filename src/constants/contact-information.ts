export type ContactInformationType = {
  icon: string;
  text: string;
  href: string;
};

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
