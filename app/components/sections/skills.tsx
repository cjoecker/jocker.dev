import { motion, useAnimationControls } from "framer-motion";

import { Section } from "../shared/section";

interface SkillItem {
	skill: string;
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export const DevSkills: SkillItem[] = [
	{ skill: "React", level: 10 },
	{ skill: "Angular", level: 9 },
	{ skill: "TypeScript", level: 10 },
	{ skill: "Javascript", level: 10 },
	{ skill: "Remix / React Router", level: 9 },
	{ skill: "Next.js", level: 8 },
	{ skill: "Node.js", level: 8 },
	{ skill: "Python", level: 6 },
	{ skill: "FastAPI", level: 6 },
	{ skill: "Java", level: 3 },
	{ skill: "Spring Boot", level: 2 },
	{ skill: "Zustand", level: 10 },
	{ skill: "React Context", level: 7 },
	{ skill: "Redux", level: 3 },
	{ skill: "CI/CD", level: 6 },
	{ skill: "RESTful API design", level: 9 },
	{ skill: "GraphQL", level: 3 },
	{ skill: "Prisma", level: 8 },
	{ skill: "PostgreSQL", level: 8 },
	{ skill: "Vercel AI SDK", level: 10 },
	{ skill: "database management", level: 6 },
	{ skill: "security best practices", level: 8 },
	{ skill: "HTML", level: 10 },
	{ skill: "CSS", level: 10 },
	{ skill: "Tailwind CSS", level: 9 },
	{ skill: "Responsive Design", level: 10 },
	{ skill: "Material-UI", level: 10 },
	{ skill: "Framer-Motion", level: 10 },
	{ skill: "Jest", level: 9 },
	{ skill: "Vitest", level: 9 },
	{ skill: "Testing Library", level: 9 },
	{ skill: "Cypress", level: 7 },
	{ skill: "Playwright", level: 9 },
	{ skill: "Azure", level: 3 },
	{ skill: "AWS", level: 7 },
	{ skill: "AWS CDK", level: 7 },
	{ skill: "AWS SDK", level: 7 },
	{ skill: "Docker", level: 5 },
	{ skill: "VBA", level: 9 },
	{ skill: "Scrum", level: 9 },
	{ skill: "Agile", level: 10 },
	{ skill: "Internet of Things (IoT)", level: 9 },
	{ skill: "MQTT", level: 7 },
	{ skill: "Embedded C", level: 5 },
	{ skill: "STM32", level: 5 },
	{ skill: "A11Y", level: 9 },
	{ skill: "UX/UI Design", level: 9 },
];

interface SkillProps {
	skill: string;
	level: number;
}

const Skill = ({ skill, level }: SkillProps) => {
	const controls = useAnimationControls();

	const showLevel = () => {
		const percentage = (level / 10) * 100;
		void controls.start({ width: `${percentage}%` });
	};

	return (
		<motion.div
			variants={{
				visible: { scale: 1 },
				hidden: { scale: 0 },
			}}
			onHoverStart={showLevel}
			onTap={showLevel}
			className={
				"inset-shadow shadow-xs-turquoise border-secondary/20 from-neutral to-neutral-dark relative inline-block cursor-pointer overflow-hidden rounded-full border-2 border-solid bg-linear-to-br px-3 py-1 capitalize"
			}
		>
			<motion.div
				style={{
					x: "-4px",
				}}
				className="from-primary/70 to-blue/30 absolute inset-0 bg-linear-to-br"
				initial={{ width: 0 }}
				animate={controls}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 10,
					mass: 1,
				}}
			/>
			<div className="relative z-10">{skill}</div>
		</motion.div>
	);
};

export const Skills = () => {
	return (
		<Section
			titleKey="technicalSkills"
			className="mx-auto max-w-2xl px-2 md:px-6"
		>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.2, once: true }}
				transition={{
					staggerChildren: 0.1,
				}}
				className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2"
			>
				{DevSkills.map((skillItem) => {
					return (
						<Skill
							key={skillItem.skill}
							skill={skillItem.skill}
							level={skillItem.level}
						/>
					);
				})}
			</motion.div>
		</Section>
	);
};
