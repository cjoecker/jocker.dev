import { format } from 'date-fns';
import { motion } from 'framer-motion';

import {
  Conferences,
  ConferenceType,
  Courses,
  CourseType,
} from '../../constants/courses-and-conferences';
import { useNarrowView } from '../../hooks/useNarrowView';
import conferenceImg from '../../images/conference.svg';
import courseImg from '../../images/course.svg';
import { Section } from '../shared/section';

const NARROW_VIEW_ITEMS_COUNT = 15;
export const CoursesAndConferences = () => {
  const { isNarrowView } = useNarrowView();
  const sortedCoursesAndConferences = [...Courses, ...Conferences].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  const reducedCoursesAndConferences = isNarrowView
    ? sortedCoursesAndConferences.slice(0, NARROW_VIEW_ITEMS_COUNT)
    : sortedCoursesAndConferences;
  return (
    <Section title="Last Attended Courses and Conferences">
      <div className="w-full flex flex-col">
        <div className="flex mt-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 'some' }}
            transition={{
              staggerChildren: 0.1,
            }}
            className="flex gap-4 text-left flex-wrap"
          >
            {reducedCoursesAndConferences.map(course => {
              return (
                <motion.div
                  key={course.name}
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  className="flex flex-1 min-w-[300px]"
                >
                  {'instructor' in course ? (
                    <CourseItem course={course as CourseType} />
                  ) : (
                    <ConferenceItem conference={course} />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
const DATE_FORMAT = 'MMM, y';
const CourseItem = ({ course }: { course: CourseType }) => {
  return (
    <>
      <img
        className="mt-1 mr-1"
        alt="course"
        src={courseImg}
        width={20}
        height={20}
      />
      <div>
        <div className="font-medium">{course.name}</div>
        <div className="text-xs">
          {`${course.instructor} – ${format(course.date, DATE_FORMAT)}`}
        </div>
      </div>
    </>
  );
};

const ConferenceItem = ({ conference }: { conference: ConferenceType }) => {
  return (
    <>
      <img
        className="mt-1 mr-1"
        alt="conference"
        src={conferenceImg}
        width={20}
        height={20}
      />
      <div>
        <div className="font-medium">{conference.name}</div>
        <div className="text-xs">{format(conference.date, DATE_FORMAT)}</div>
      </div>
    </>
  );
};
