import { motion } from 'framer-motion';

import { DevSkills, UxSkills } from '../../constants/skills';
import { Section } from '../shared/section';

export const Skills = () => {
	return (
		<Section title="Skills" className="flex flex-col mx-8 sm:mx-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-7xl mx-auto">
				<Tags skills={DevSkills} title="Web Development" />
				<Tags skills={UxSkills} title="UX/UI Design" />
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
		<div className="mt-4 col-span-1">
			<h3 className="text-lg text-left mb-6 font-semibold">{title}</h3>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.2, once: true }}
				transition={{
					staggerChildren: 0.1,
				}}
				className="flex gap-4 text-left flex-wrap"
			>
				{skills.map(skill => {
					return (
						<motion.div
							key={skill}
							variants={{
								visible: { scale: 1 },
								hidden: { scale: 0 },
							}}
							className={`${
								title === 'Web Development'
									? 'shadow-sm-turquoise'
									: 'shadow-sm-purple'
							} border-solid border-secondary/10 border-2 bg-gradient-to-br from-neutral to-neutral-dark inline-block rounded-full px-3 py-1 text-md capitalize`}
						>
							{skill}
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};
