import { motion } from 'framer-motion';
import { Section } from '../shared/section';
import { WorkExperience } from '../../constants/about-me';
import { differenceInMonths, format } from 'date-fns';

export const AboutMe = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section title="More About me!">
      <div className="max-w-[300px]">
        <h3 className="text-xl mb-4">Work Experience</h3>
        <div className="flex gap-2 flex-col">
          {WorkExperience.map((experience, index) => {
            const isLogoVisible =
              experience.logo !== WorkExperience?.[index - 1]?.logo;
            const isLastItem = index + 1 === WorkExperience.length;
            const hasNextItemLogo =
              experience.logo !== WorkExperience?.[index + 1]?.logo;
            return (
              <div className="text-left flex">
                <div className="flex flex-col w-14 min-w-[60px]">
                  {isLogoVisible ? (
                    <motion.img
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
    </Section>
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
