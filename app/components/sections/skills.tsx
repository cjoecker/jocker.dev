import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Section } from "../shared/section";

export const DevSkills: string[] = [
	"React",
	"Angular",
	"TypeScript",
	"Javascript",
	"Remix",
	"Next.js",
	"Node.js",
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
];
export const UxSkills: string[] = [
	"Figma",
	"AdobeXD",
	"Photoshop",
	"Illustrator",
	"Affinity Designer",
	"Animate",
	"After Effects",
	"Premiere Pro",
	"user tests",
	"wireframes and prototypes",
	"User-Centered-Design",
	"user journey map",
	"user centered design (UCD)",
	"information architecture",
	"personas",
	"accessibility",
	"red routes",
	"card sorting",
	"responsive design",
	"interaction design",
	"UX writing",
	"UX research",
	"A/B testing",
	"cross-cultural design",
	"ideation workshops",
];
export const Skills = () => {
	const { t } = useTranslation();
	return (
		<Section titleKey="skills" className="mx-8 flex flex-col sm:mx-16">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2">
				<Tags skills={DevSkills} title={t("webDevelopment")} />
				<Tags skills={UxSkills} title={t("uxUiDesign")} />
			</div>
		</Section>
	);
};

export const Tags = ({
	skills,
	title,
}: {
	skills: string[];
	title: string;
}) => {
	return (
		<div className="col-span-1 mt-4">
			<h3 className="mb-4 text-left text-lg font-semibold">{title}</h3>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.2, once: true }}
				transition={{
					staggerChildren: 0.1,
				}}
				className="flex flex-wrap gap-2 text-left"
			>
				{skills.map((skill) => {
					return (
						<motion.div
							key={skill}
							variants={{
								visible: { scale: 1 },
								hidden: { scale: 0 },
							}}
							className={`${
								title === "Web Development"
									? "shadow-xs-turquoise"
									: "shadow-xs-purple"
							} border-secondary/10 from-neutral to-neutral-dark inline-block rounded-full border-2 border-solid bg-linear-to-br px-3 py-1 capitalize`}
						>
							{skill}
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};
