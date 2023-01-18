export type ContactInformationType = {
  icon: string;
  text: string;
  href: string;
};

export type CourseType = {
  name: string;
  instructor: string;
  date: Date;
};

export type ConferenceType = {
  name: string;
  date: Date;
};

export type CoreValuesType = {
  coreValue: string;
  explanation: string;
};

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
