import { differenceInMonths, format } from 'date-fns';

import {
  education,
  EducationType,
  WorkExperienceData,
  WorkExperienceType,
} from '../../constants/experience-and-education';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

export const ExperienceAndEducation = () => {
  return (
    <Section title="Education and Work Experience">
      <WorkExperience />
    </Section>
  );
};
// TODO rename course icon

const WorkExperience = () => {
  const icons = require.context('../../images/', false);
  const workAndEducation = [...WorkExperienceData, ...education].sort(
    (a, b) => a.startDate.getTime() - b.startDate.getTime()
  );
  return (
    <div className="flex w-full flex-col">
      {workAndEducation.map((experienceItem, index) => {
        const isOdd = index % 2 === 0;
        const isWork = 'link' in experienceItem;
        const isFirst = index === 0
        const isLast = index === workAndEducation.length - 1
        return (
          <div className="flex">
            <div className="flex-1 min-w-0">
              {!isOdd && (
                <ExperienceItem
                  isOdd={isOdd}
                  item={experienceItem}
                />
              )}
            </div>
            <div className="flex-grow-0 flex-shrink-0 flex flex-col">
              <div className="flex-1 pb-2">
                <span className={`w-[3px] h-full flex mx-auto rounded-b-full opacity-60 ${isFirst
                  ? 'bg-gradient-to-t from-secondary to-transparent'
                  : 'bg-secondary'}`} />
              </div>
              <div
                className="bg-contain flex p-3 bg-timeline-circle rounded-full"
              >
                <img
                  width="40"
                  height="40"
                  alt={isWork ? 'office' : 'course'}
                  src={icons(`./${isWork ? 'office' : 'course'}.svg`)}
                />
              </div>
              <div className="flex-1 pt-2">
                <span
                  className={`w-[3px] h-full flex mx-auto rounded-t-full opacity-60 ${
                    isLast
                      ? 'bg-gradient-to-b from-secondary to-transparent'
                      : 'bg-secondary'
                  }`}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              {isOdd && (
                <ExperienceItem
                  isOdd={isOdd}
                  item={experienceItem}
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
  isOdd,
}: {
  item: WorkExperienceType | EducationType;
  isOdd: boolean;
}) => {
  const icons = require.context('../../images/', false);
  return (
    <div
      className={`flex my-5 ${
        isOdd ? 'text-left justify-start ml-6' : 'text-right justify-end mr-6'
      }`}
    >
      <div className="mb-2">
        <button
          className="max-w-[100px] "
          onClick={() =>
            'link' in item ? window.open(item.link, '_blank') : null
          }
        >
          <img
            width="100"
            height={item.logoHeight}
            alt={getAltTextFromFileName(item.logo)}
            src={icons(`./${item.logo}`)}
            className="w-full object-contain hover:cursor-pointer"
          />
        </button>
        <div className="text-lg mt-1" style={{ lineHeight: '1.1rem' }}>{item.title}</div>
        <div className="opacity-80 leading-tight mt-2">
          {formatTimePeriod(item.startDate, item.endDate)}
        </div>
        <div className="opacity-80 leading-tight mt-1">{item.location}</div>
      </div>
    </div>
  );
};

function formatDate(date: Date, showDay = false) {
  return showDay ? format(date, 'MMM dd, yyyy') : format(date, 'MMM, yyyy');
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
