import { motion } from "framer-motion";

import type {
	ConferenceType,
	CourseType,
} from "../../constants/courses-and-conferences";
import { Conferences, Courses } from "../../constants/courses-and-conferences";
import ConferenceImg from "../../images/conference.svg";
import GraduateCapImg from "../../images/graduate-cap.svg";
import MeshPurpleTurquoise from "../../images/mesh-purple-turquoise.svg";
import { Section } from "../shared/section";

import { useFormatDates } from "~/hooks/use-format-dates";

export const CoursesAndConferences = () => {
	const sortedCoursesAndConferences = [...Courses, ...Conferences].sort(
		(a, b) => {
			return b.date.getTime() - a.date.getTime();
		},
	);
	return (
		<Section titleKey="coursesAndConferences">
			<div className="mx-0 flex w-full flex-col sm:mx-2">
				<div className="relative mx-auto flex max-w-6xl">
					<img
						alt=""
						aria-hidden="true"
						className="invisible absolute top-1/2 left-1/2 -z-10 h-[250%] min-h-full w-[250%] -translate-x-1/2 -translate-y-1/2 sm:visible"
						src={MeshPurpleTurquoise}
					/>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
						transition={{
							staggerChildren: 0.1,
						}}
						className="grid grid-cols-2 gap-4 text-left md:grid-cols-3 lg:grid-cols-4"
					>
						{sortedCoursesAndConferences.map((course) => {
							return (
								<motion.div
									key={course.name}
									variants={{
										visible: { opacity: 1 },
										hidden: { opacity: 0 },
									}}
									className="col-span-1 flex min-w-0"
								>
									{"instructor" in course ? (
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
const CourseItem = ({ course }: { course: CourseType }) => {
	const { formatDate } = useFormatDates();
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
				<div className="truncate text-base">{course.name}</div>
				<div className="text-sm opacity-80">
					{`${course.instructor} – ${formatDate(course.date)}`}
				</div>
			</div>
		</>
	);
};

const ConferenceItem = ({ conference }: { conference: ConferenceType }) => {
	const { formatDate } = useFormatDates();
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
				<div className="truncate text-base">{conference.name}</div>
				<div className="text-sm opacity-80">{formatDate(conference.date)}</div>
			</div>
		</>
	);
};
