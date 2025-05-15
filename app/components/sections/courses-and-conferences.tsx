import { motion } from "framer-motion";

import ConferenceImg from "../../images/conference.svg";
import GraduateCapImg from "../../images/graduate-cap.svg";
import MeshPurpleTurquoise from "../../images/mesh-purple-turquoise.svg";
import { Section } from "../shared/section";

import { useFormatDates } from "~/hooks/use-format-dates";

export const Courses: CourseType[] = [
	{
		name: "Improvisation Skills",
		instructor: "SUBIT!",
		date: new Date("2025-03"),
	},
	{
		name: "AWS IoT Hand-on Training",
		instructor: "Thomas Kriechbaumer",
		date: new Date("2024-04"),
	},
	{
		name: "Epic Web",
		instructor: "Kent C. Dodds",
		date: new Date("2025-02"),
	},
	{
		name: "Affinity Designer",
		instructor: "Heiko Deppler",
		date: new Date("2019-01"),
	},
	{
		name: "Agile Speed Refueling",
		instructor: "MaibornWolff",
		date: new Date("2019-07"),
	},
	{
		name: "Business Analysis",
		instructor: "Jamal Moustafev",
		date: new Date("2019-07"),
	},
	{
		name: "UX Ultimate Guide",
		instructor: " Davis Travis",
		date: new Date("2019-09"),
	},
	{
		name: "Your Performance, a Communication Seminar",
		instructor: "Nadine Antler & Torsten Voller",
		date: new Date("2019-09"),
	},
	{
		name: "Usability School",
		instructor: "Kerstin Öchsner  & Victoria Müller",
		date: new Date("2019-10"),
	},
	{
		name: "Projects Early Phases",
		instructor: "Dr. Martina Beck",
		date: new Date("2019-12"),
	},
	{
		name: "Big Pictures",
		instructor: "Judith Eckerle",
		date: new Date("2020-01"),
	},
	{
		name: "Architecture Foundation",
		instructor: "Jan Schuhmacher",
		date: new Date("2020-02"),
	},
	{
		name: "Frontend Architecture Foundation",
		instructor: "Simon Ismair",
		date: new Date("2020-02"),
	},
	{
		name: "Good Code",
		instructor: "Michael P",
		date: new Date("2020-03"),
	},
	{
		name: "Safe Programming",
		instructor: "Philippe Schrettenbrunner",
		date: new Date("2020-03"),
	},
	{
		name: "Sketchnoting",
		instructor: "Carola Scharvogel",
		date: new Date("2020-06"),
	},
	{
		name: "Hacking Workshop",
		instructor: "MaibornWolff",
		date: new Date("2020-07"),
	},
	{
		name: "Cultural Orientation",
		instructor: "Rocio G. Luis",
		date: new Date("2021-02"),
	},
	{
		name: "Cloud Instrumentation",
		instructor: "MaibornWolff",
		date: new Date("2021-04"),
	},
	{
		name: "Radical Honesty",
		instructor: "Volker Rupp",
		date: new Date("2021-12"),
	},
	{
		name: "Test Driven Development",
		instructor: "Matt Greencroft",
		date: new Date("2019-06"),
	},
	{
		name: "Docker and Kubernetes",
		instructor: "Stephen Grider",
		date: new Date("2022-06"),
	},
	{
		name: "Epic React",
		instructor: "Kent C. Dodds",
		date: new Date("2020-06"),
	},
	{
		name: "Testing Javascript",
		instructor: "Kent C. Dodds",
		date: new Date("2020-06"),
	},
	{
		name: "Praise at Eye Level",
		instructor: "Stephanie Salecker",
		date: new Date("2022-09"),
	},
	{
		name: "Communication Coaching",
		instructor: "Moritz Weilandt",
		date: new Date("2022-05"),
	},
	{
		name: "Liberating Structures",
		instructor: "Elisabeth Kistler",
		date: new Date("2021-02"),
	},
	{
		name: "Voice Training",
		instructor: "Martin Richter",
		date: new Date("2019-08"),
	},
	{
		name: "Professional Scrum with UX",
		instructor: "Jeff Gothelf",
		date: new Date("2020-01"),
	},
	{
		name: "Refactoring UI",
		instructor: "Tailwind Labs Inc",
		date: new Date("2022-12"),
	},
	{
		name: "AWS Certified Cloud Practitioner",
		instructor: "Neal Davis",
		date: new Date("2023-03"),
	},
];
export const Conferences: ConferenceType[] = [
	{
		name: "Valencia Digital Summit",
		date: new Date("2024-11"),
	},
	{
		name: "Embedded World",
		date: new Date("2024-04"),
	},
	{
		name: "UXDX Dublin",
		date: new Date("2023-10"),
	},
	{
		name: "React Miami",
		date: new Date("2022-04"),
	},
	{
		name: "React Summit Amsterdam",
		date: new Date("2022-05"),
	},
	{
		name: "Scrum Day Stuttgart",
		date: new Date("2020-05"),
	},
	{
		name: "UXDX Berlin",
		date: new Date("2025-05"),
	},
	{
		name: "Greentech Festival",
		date: new Date("2025-05"),
	},
	{
		name: "GITEX Europe",
		date: new Date("2025-05"),
	},
];

export interface CourseType {
	name: string;
	instructor: string;
	date: Date;
}

export interface ConferenceType {
	name: string;
	date: Date;
}

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
