import { differenceInMonths, format } from 'date-fns';
import { motion } from 'framer-motion';

import {
  education,
  WorkExperienceData,
  ExperiencAndEductionType,
} from '../../constants/experience-and-education';
import { useNarrowView } from '../../hooks/useNarrowView';
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
        const isFirst = index === 0;
        const isLast = index === workAndEducation.length - 1;
        return (
          <div
            className="flex mx-4"
            key={`${experienceItem.title}${experienceItem.logo}`}
          >
            <div className="flex-1 min-w-0">
              {!isOdd && <ExperienceItem isOdd={isOdd} item={experienceItem} />}
            </div>
            <div className="flex-grow-0 flex-shrink-0 flex flex-col">
              <div className="flex-1 pb-2">
                <span
                  className={`w-[3px] h-full flex mx-auto rounded-b-full opacity-60 ${
                    isFirst
                      ? 'bg-gradient-to-t from-secondary to-transparent'
                      : 'bg-secondary'
                  }`}
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 'all', once: true }}
                variants={{
                  visible: { scale: 1 },
                  hidden: { scale: 0 },
                }}
                className={`${experienceItem.type === 'work' ? 'shadow-md-turquoise' : 'shadow-md-purple'} bg-contain flex p-3 rounded-full border-solid border-secondary/10 border-2 bg-gradient-to-br from-neutral to-neutral-dark`}
              >
                <img
                  loading="lazy"
                  width="40"
                  height="40"
                  alt={experienceItem.type === 'work' ? 'office' : 'course'}
                  src={icons(
                    `./${
                      experienceItem.type === 'work' ? 'office' : 'course'
                    }.svg`
                  )}
                />
              </motion.div>
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
              {isOdd && <ExperienceItem isOdd={isOdd} item={experienceItem} />}
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
  item: ExperiencAndEductionType;
  isOdd: boolean;
}) => {
  const icons = require.context('../../images/', false);
  const { isNarrowView } = useNarrowView();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: xAnimationStartPos(isNarrowView, isOdd) },
      }}
      className={`flex my-5 overflow-hidden max-w-fit ${
        isOdd
          ? 'text-left justify-start ml-3 md:ml-6'
          : 'text-right justify-end ml-auto mr-3 md:mr-6'
      }`}
    >
      <div className="mb-2 max-w-[300px]">
        <button
          aria-label={getAltTextFromFileName(item.logo)}
          className="max-w-[100px] "
          onClick={() =>
            'link' in item ? window.open(item.link, '_blank') : null
          }
        >
          <img
            loading="lazy"
            width="100"
            height={item.logoHeight}
            alt={getAltTextFromFileName(item.logo)}
            src={icons(`./${item.logo}`)}
            className="w-full object-contain hover:cursor-pointer"
          />
        </button>
        <div
          className="text-base md:text-md mt-1 break-words"
          style={{ lineHeight: '1.3rem' }}
        >
          {item.title}
        </div>
        <div className="opacity-80 leading-tight mt-2 text-sm md:text-base">
          {formatTimePeriod(item.startDate, item.endDate)}
        </div>
        <div className="opacity-80 leading-tight text-sm md:text-base">
          {item.location}
        </div>
      </div>
    </motion.div>
  );
};

function xAnimationStartPos(isNarrowView: boolean, isOdd: boolean) {
  if (isNarrowView) {
    return 0;
  }
  return isOdd ? 100 : -100;
}

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
