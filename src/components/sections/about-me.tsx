import { Section } from '../shared/section';
import {
  education,
  LanguagesData,
  WorkExperienceData,
} from '../../constants/about-me';
import { differenceInMonths, format } from 'date-fns';

export const AboutMe = () => {
  return (
    <Section title="More About Me">
      <div className="flex gap-20 mx-auto justify-center">
        <WorkExperience />
        <Languages />
        <Education />
      </div>
    </Section>
  );
};

const Education = () => {
  const icons = require.context('../../images/', false);
  return (
    <div className="max-w-[350px]">
      <h3 className="text-xl mb-4">Education</h3>
      <div className="flex gap-2 flex-col">
        {education.map(educationItem => {
          return (
            <div className="text-left flex" key={educationItem.degree}>
              <div className="flex flex-col w-10 min-w-[50px]">
                <img
                  alt={educationItem.degree}
                  src={icons(`./${educationItem.logo}`)}
                  className="w-full object-contain hover:cursor-pointer mt-1"
                />
              </div>
              <div className="ml-3 mb-2">
                <div style={{ lineHeight: '1.1rem' }}>
                  {educationItem.degree}
                </div>
                <div className="text-sm opacity-80">
                  {educationItem.location}
                </div>
                <div className="text-sm opacity-80 -mt-1">
                  {educationItem.timePeriod}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Languages = () => {
  const icons = require.context('../../images/', false);
  return (
    <div className="max-w-[250px]">
      <h3 className="text-xl mb-4">Languages</h3>
      <div className="grid grid-cols-2">
        {LanguagesData.map(language => {
          return (
            <div className="col-span-1">
              <img width="40" height="40" src={icons(`./${language.icon}`)} />
              <div className="font-bold">{language.language}</div>
              <div className="-mt-1">{language.level}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const icons = require.context('../../images/', false);
  return (
    <div className="max-w-[400px]">
      <h3 className="text-xl mb-4">Work Experience</h3>
      <div className="flex gap-2 flex-col">
        {WorkExperienceData.map((experience, index) => {
          const isLogoVisible =
            experience.logo !== WorkExperienceData?.[index - 1]?.logo;
          const isLastItem = index + 1 === WorkExperienceData.length;
          const hasNextItemLogo =
            experience.logo !== WorkExperienceData?.[index + 1]?.logo;
          return (
            <div className="text-left flex">
              <div className="flex flex-col w-14 min-w-[60px]">
                {isLogoVisible ? (
                  <img
                    src={icons(`./${experience.logo}`)}
                    className="w-full object-contain hover:cursor-pointer mt-1"
                    onClick={() => window.open(experience.link, '_blank')}
                  />
                ) : (
                  <div className="rounded-full min-h-[7px] min-w-[7px] bg-primary mx-auto mt-3 mb-2" />
                )}
                {!isLastItem && (
                  <div
                    className={`w-[1px] h-full bg-primary mx-auto mt-2 rounded-full ${
                      hasNextItemLogo ? '' : '-mb-3'
                    }`}
                  />
                )}
              </div>
              <div className="ml-3 mb-2">
                <div style={{ lineHeight: '1.1rem' }}>
                  {experience.position}
                </div>
                <div className="text-sm opacity-80">
                  {formatTimePeriod(experience.startDate, experience.endDate)}
                </div>
                <div className="text-sm opacity-80 -mt-1">
                  {experience.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function formatDate(date: Date, showDay = false) {
  return showDay ? format(date, 'MMM dd, yyyy') : format(date, 'MMM, yyyy');
}

export function formatTimePeriod(startDate: Date, endDate: Date | 'today') {
  const newEndDate = endDate === 'today' ? new Date() : endDate;

  const distanceInYears = (differenceInMonths(newEndDate, startDate) + 1) / 12;
  const distance =
    distanceInYears > 1
      ? `${distanceInYears.toFixed(1).replace('.0', '')}y`
      : `${differenceInMonths(newEndDate, startDate)}m`;

  return endDate === 'today'
    ? `${formatDate(startDate)} - Present  (${distance})`
    : `${formatDate(startDate)} - ${formatDate(endDate)}  (${distance})`;
}
