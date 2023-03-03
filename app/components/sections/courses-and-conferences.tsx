import { format } from 'date-fns';
import { motion } from 'framer-motion';

import type {
	ConferenceType,
	CourseType,
} from '../../constants/courses-and-conferences';
import { Conferences, Courses } from '../../constants/courses-and-conferences';
import ConferenceImg from '../../images/conference.svg';
import GraduateCapImg from '../../images/graduate-cap.svg';
import MeshPurpleTurquoise from '../../images/mesh-purple-turquoise.svg';
import { Section } from '../shared/section';

export const CoursesAndConferences = () => {
	const sortedCoursesAndConferences = [...Courses, ...Conferences].sort(
		(a, b) => b.date.getTime() - a.date.getTime()
	);
	return (
		<Section title="Last Attended Courses and Conferences">
			<div className="w-full flex flex-col ">
				<div className="flex relative max-w-7xl mx-auto">
					<img
						alt=""
						aria-hidden="true"
						className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[250%] h-[250%]"
						src={MeshPurpleTurquoise}
					/>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
						transition={{
							staggerChildren: 0.1,
						}}
						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left"
					>
						{sortedCoursesAndConferences.map(course => {
							return (
								<motion.div
									key={course.name}
									variants={{
										visible: { opacity: 1 },
										hidden: { opacity: 0 },
									}}
									className="flex col-span-1 min-w-0"
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
				loading="lazy"
				className="mr-2 mb-auto"
				alt="course"
				src={GraduateCapImg}
				width={20}
				height={20}
			/>
			<div className="overflow-hidden">
				<div className="text-base overflow-ellipsis whitespace-nowrap overflow-hidden">
					{course.name}
				</div>
				<div className="text-sm opacity-80">
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
				loading="lazy"
				className="mr-2 mb-auto"
				alt="conference"
				src={ConferenceImg}
				width={20}
				height={20}
			/>
			<div className="overflow-hidden">
				<div className="text-base overflow-ellipsis whitespace-nowrap overflow-hidden">
					{conference.name}
				</div>
				<div className="text-sm opacity-80">
					{format(conference.date, DATE_FORMAT)}
				</div>
			</div>
		</>
	);
};
