import { motion } from 'framer-motion';

import { LanguagesData } from '../../constants/languages';
import MeshPurple from '../../images/mesh-purple.svg';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

export const Languages = () => {
	return (
		<Section title="Languages" className="flex flex-col">
			<div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-4">
				{LanguagesData.map(language => {
					return (
						<div className="relative col-span-1 m-auto" key={language.language}>
							<img
								alt=""
								aria-hidden="true"
								height={800}
								width={600}
								className="absolute left-1/2 top-1/2 -z-10 min-h-[350px]  min-w-[350px] -translate-x-1/2 -translate-y-1/2 sm:h-[200%] sm:w-[300%]"
								src={MeshPurple}
							/>
							<img
								loading="lazy"
								className="mb-2"
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
