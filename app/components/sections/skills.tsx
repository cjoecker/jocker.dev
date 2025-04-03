import { motion } from 'framer-motion';

import { DevSkills, UxSkills } from '../../constants/skills';
import { Section } from '../shared/section';

export const Skills = () => {
	return (
		<Section title="Skills" className="mx-8 flex flex-col sm:mx-16">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2">
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
									? 'shadow-xs-turquoise'
									: 'shadow-xs-purple'
							} inline-block rounded-full border-2 border-solid border-secondary/10 bg-linear-to-br from-neutral to-neutral-dark px-3 py-1 capitalize`}
						>
							{skill}
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};
