import { differenceInMonths, format } from 'date-fns';

import {
  education,
  EducationType,
  LanguagesData,
  WorkExperienceData,
  WorkExperienceType,
} from '../../constants/about-me';
import { Section } from '../shared/section';

export const AboutMe = () => {
  return (
    <Section title="Education and Work Experience">
      <WorkExperience />
      {/*<div className="flex gap-20 mx-auto justify-center flex-wrap">*/}
      {/*<WorkExperience />*/}
      {/*<Languages />*/}
      {/*<Education />*/}
      {/*</div>*/}
    </Section>
  );
};

const background: Record<string, string> = {
  'kuka.svg': 'bg-primary',
  'maibornwolff.svg': 'bg-secondary',
  'me-with-macbook.webp': 'bg-primary',
};

const WorkExperience = () => {
  const icons = require.context('../../images/', false);
  return (
    <div className="flex w-full flex-col">
      {WorkExperienceData.map((experienceItem, index) => {
        const isOdd = index % 2 === 0;
        return (
          <div className="flex">
            <div className="flex-1">
              {!isOdd && (
                <ExperienceItem
                  isOdd={isOdd}
                  item={experienceItem}
                  isLogoVisible={true}
                />
              )}
            </div>
            <div className="flex-grow-0 flex-shrink-0 flex flex-col">
              <div className="flex-1 pb-2">
                <span className="w-[1px] h-full bg-secondary flex mx-auto" />
              </div>
              <div
                className="bg-contain flex p-2"
                style={{ backgroundImage: `url(${icons(`./circle.svg`)})` }}
              >
                <img
                  width="40"
                  height="40"
                  alt={'university'}
                  src={icons(`./course.svg`)}
                />
              </div>
              <div className="flex-1 pt-2">
                <span className="w-[1px] h-full bg-secondary flex mx-auto" />
              </div>
            </div>
            <div className="flex-1">
              {isOdd && (
                <ExperienceItem
                  isOdd={isOdd}
                  item={experienceItem}
                  isLogoVisible={true}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// TODO make connection line a separate container

const ExperienceItem = ({
  item,
  isLogoVisible,
  isOdd,
}: {
  item: WorkExperienceType;
  isLogoVisible: boolean;
  isOdd: boolean;
}) => {
  const icons = require.context('../../images/', false);

  return (
    <div
      className={`flex my-6 mx-3 ${
        isOdd ? 'text-left justify-start' : 'text-right justify-end'
      }`}
      key={`${item.position}${item.logo}`}
    >
      <div className="mb-2">
        <button
          className="max-w-[100px]"
          onClick={() => window.open(item.link, '_blank')}
        >
          <img
            alt={getAltTextFromFileName(item.logo)}
            src={icons(`./${item.logo}`)}
            className="w-full object-contain hover:cursor-pointer mt-1"
          />
        </button>
        <div style={{ lineHeight: '1.1rem' }}>{item.position}</div>
        <div className="text-sm opacity-80">
          {formatTimePeriod(item.startDate, item.endDate)}
        </div>
        <div className="text-sm opacity-80 -mt-1">{item.location}</div>
      </div>
    </div>
  );
};

const Education2 = () => {
  const icons = require.context('../../images/', false);
  return (
    <div className="max-w-[350px] ml-2">
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
            <div className="col-span-1" key={language.language}>
              <img
                width="40"
                height="40"
                alt={getAltTextFromFileName(language.icon)}
                src={icons(`./${language.icon}`)}
              />
              <div className="font-bold">{language.language}</div>
              <div className="-mt-1">{language.level}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WorkExperience2 = () => {
  const icons = require.context('../../images/', false);
  return (
    <div className="max-w-[350px]">
      <h3 className="text-xl mb-4">Work Experience</h3>
      <div className="flex gap-2 flex-col">
        {WorkExperienceData.map((experience, index) => {
          const isLogoVisible =
            experience.logo !== WorkExperienceData?.[index - 1]?.logo;
          const isLastItem = index + 1 === WorkExperienceData.length;
          const hasNextItemLogo =
            experience.logo !== WorkExperienceData?.[index + 1]?.logo;
          return (
            <div
              className="text-left flex"
              key={`${experience.position}${experience.logo}`}
            >
              <div className="flex flex-col max-w-[80px] min-w-[80px]">
                {isLogoVisible ? (
                  <button
                    onClick={() => window.open(experience.link, '_blank')}
                  >
                    <img
                      alt={getAltTextFromFileName(experience.logo)}
                      src={icons(`./${experience.logo}`)}
                      className="w-full object-contain hover:cursor-pointer mt-1"
                    />
                  </button>
                ) : (
                  <div className="rounded-full min-h-[7px] min-w-[7px] bg-primary mx-auto mt-3 mb-1" />
                )}
                {!isLastItem && (
                  <div
                    className={`w-[1px] h-full bg-primary mx-auto mt-1 rounded-full ${
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

const TIMELINE_END_DATE = new Date('2023-07-01');
const TIMELINE_START_DATE = new Date('2011-09-01');
const TIME_SPAN = TIMELINE_END_DATE.getTime() - TIMELINE_START_DATE.getTime();
function getTimePercent(item: EducationType | WorkExperienceType) {
  const endDate = item.endDate === 'today' ? TIMELINE_END_DATE : item.endDate;
  const percent =
    ((endDate.getTime() - item.startDate.getTime()) / TIME_SPAN) * 100;
  return `${percent.toFixed(2)}%`;
}

function getStartOffsetPercent(item: EducationType | WorkExperienceType) {
  const offset = item.startDate.getTime() - TIMELINE_START_DATE.getTime();
  const percent = (offset / TIME_SPAN) * 100;
  return `${percent.toFixed(2)}%`;
}

function formatDate(date: Date, showDay = false) {
  return showDay ? format(date, 'MMM dd, yyyy') : format(date, 'MMM, yyyy');
}

function getTimeDistance(item: EducationType | WorkExperienceType) {
  const endDate = item.endDate === 'today' ? TIMELINE_END_DATE : item.endDate;
  const distanceInYears =
    (differenceInMonths(endDate, item.startDate) + 1) / 12;
  return distanceInYears > 1
    ? `${distanceInYears.toFixed(1).replace('.0', '')}y`
    : `${differenceInMonths(endDate, item.startDate)}m`;
}

function formatTimePeriod(startDate: Date, endDate: Date | 'today') {
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

function getAltTextFromFileName(filename: string) {
  return filename.replace('.svg', '').replace('-', ' ');
}
