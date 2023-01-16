import { motion } from 'framer-motion';
import { Conferences, Courses } from '../constants/content';
import { format } from 'date-fns';
import courseImg from '../images/course.svg';
import conferenceImg from '../images/conference.svg';
import { ConferenceType, CourseType } from '../constants/content.models';

export const CoursesAndConferences = () => {
  const sortedCourses = [...Courses, ...Conferences].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  return (
    <div className="w-full flex flex-col mt-48">
      <h2 className="text-primary text-4xl font-normal">
        Last Courses and Conferences Attended
      </h2>
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
          {sortedCourses.map(course => {
            return (
              <motion.div
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
  );
};
const DATE_FORMAT = 'MMM, y'
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
