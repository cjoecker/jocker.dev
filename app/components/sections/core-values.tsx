import { motion } from 'framer-motion';

import type { CoreValuesType } from '../../constants/core-values';
import { CoreValuesData } from '../../constants/core-values';
import MeditatingImage from '../../images/meditating.webp';
import MeshPurpleTurquoise from '../../images/mesh-purple-turquoise.svg';
import { Section } from '../shared/section';

export const CoreValues = () => {
	return (
		<Section title="Core Values">
			<div className="flex relative flex-col">
				<div className="relative flex mx-auto">
					<img
						alt=""
						aria-hidden="true"
						className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[300%] h-[300%]"
						src={MeshPurpleTurquoise}
					/>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
						transition={{
							staggerChildren: 0.3,
						}}
						className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-y-12 gap-x-16"
					>
						{CoreValuesData.map(value => {
							return <CoreValue key={value.coreValue} coreValue={value} />;
						})}
					</motion.div>
				</div>
				<div className="m-auto px-2">
					<motion.img
						loading="lazy"
						width="350"
						height="260"
						className="w-full max-w-[350px] h-auto mt-12 sm:-mt-5"
						src={MeditatingImage}
						alt="avatar of myself meditating"
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.5, once: true }}
						transition={{ duration: 2 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 100 },
						}}
					/>
				</div>
			</div>
		</Section>
	);
};

const CoreValue = ({ coreValue }: { coreValue: CoreValuesType }) => {
	return (
		<motion.div
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			className="flex flex-col align-top max-w-[190px] col-span-1"
		>
			<h3 className="font-semibold text-md">{coreValue.coreValue}</h3>
			<p className="mt-0.5 opacity-90">{coreValue.explanation}</p>
		</motion.div>
	);
};
