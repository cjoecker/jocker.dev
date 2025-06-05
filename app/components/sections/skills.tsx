import { motion } from "framer-motion";

import { Section } from "../shared/section";

export const DevSkills: string[] = [
	"React",
	"Angular",
	"TypeScript",
	"Javascript",
	"Remix / React Router",
	"Next.js",
	"Node.js",
	"Python",
	"FastAPI",
	"Java",
	"Spring Boot",
	"Zustand",
	"CI/CD",
	"RESTful API design",
	"Prisma",
	"PostgreSQL",
	"Vercel AI SDK",
	"database management",
	"security best practices",
	"HTML",
	"CSS",
	"Material-UI",
	"Framer-Motion",
	"Jest",
	"Vitest",
	"Cypress",
	"Playwright",
	"Tailwind CSS",
	"Azure",
	"AWS",
	"AWS CDK",
	"AWS SDK",
	"Docker",
	"VBA",
	"Scrum",
	"Agile",
	"Internet of Things (IoT)",
	"MQTT",
	"Embedded C",
	"STM32",
	"UX/UI Design",
];

export const Skills = () => {
	return (
		<Section titleKey="skills" className="mx-auto max-w-2xl px-2 md:px-6">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.2, once: true }}
				transition={{
					staggerChildren: 0.1,
				}}
				className="flex flex-wrap justify-center gap-2"
			>
				{DevSkills.map((skill) => {
					return (
						<motion.div
							key={skill}
							variants={{
								visible: { scale: 1 },
								hidden: { scale: 0 },
							}}
							className={
								"shadow-xs-turquoise border-secondary/10 from-neutral to-neutral-dark inline-block rounded-full border-2 border-solid bg-linear-to-br px-3 py-1 capitalize"
							}
						>
							{skill}
						</motion.div>
					);
				})}
			</motion.div>
		</Section>
	);
};
