import { motion } from 'framer-motion';

import { LanguagesData } from '../../constants/languages';
import MeshPurple from '../../images/mesh-purple.svg';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

export const Languages = () => {
	return (
		<Section title="Languages" className="flex flex-col">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-32 gap-y-20 md:grid-cols-4">
				{LanguagesData.map(language => {
					return (
						<div className="relative col-span-1 m-auto" key={language.language}>
							<img
								alt=""
								aria-hidden="true"
								height={800}
								width={600}
								className="absolute left-1/2 top-1/2 -z-10 h-[200%] w-[300%] -translate-x-1/2 -translate-y-1/2"
								src={MeshPurple}
							/>
							<motion.img
								loading="lazy"
								initial="hidden"
								whileInView="visible"
								className="mb-2"
								viewport={{ amount: 0.1, once: true }}
								transition={{ duration: 0.7 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: 100 },
								}}
								width="130"
								height="130"
								alt={getAltTextFromFileName(language.icon)}
								src={language.icon}
							/>
							<div className="text-md font-bold">{language.language}</div>
							<div className="mt-1 text-base">{language.level}</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
};
