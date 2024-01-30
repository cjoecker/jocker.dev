import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { EXPERIENCE_YEARS } from '../../constants/experience-and-education';
import HappyIcon from '../../images/happy.svg';
import MeshPurple from '../../images/mesh-purple.svg';
import SmartphoneIcon from '../../images/smartphone.svg';
import StrongIcon from '../../images/strong.svg';
import { Section } from '../shared/section';
export const Facts = () => {
	return (
		<Section>
			<div className="relative mt-4 flex">
				<div className="mx-auto grid grid-cols-1 flex-wrap justify-between gap-x-12 gap-y-12 lg:grid-cols-3">
					<Fact
						number={EXPERIENCE_YEARS}
						label={'Years of Experience'}
						icon={StrongIcon}
						alt="strong"
					/>
					<Fact
						number={23}
						label={'Developed Apps'}
						icon={SmartphoneIcon}
						alt="smartphone"
					/>
					<Fact
						number={13}
						label={'Happy Customers'}
						icon={HappyIcon}
						alt="happy face"
					/>
				</div>
			</div>
		</Section>
	);
};

const Fact = ({
	number,
	label,
	icon,
	alt,
}: {
	number: number;
	label: string;
	icon: string;
	alt: string;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const content = useTransform(scrollYProgress, [0.9, 0.6], [0, number + 1]);

	useEffect(() => {
		ref.current.textContent = `${number}+`;
	}, [content, number]);

	return (
		<div className="relative col-span-1 flex min-w-[220px] flex-col rounded-lg p-4">
			<img
				aria-hidden="true"
				alt=""
				height={800}
				width={600}
				className="absolute left-1/2 top-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
				src={MeshPurple}
			/>
			<img
				loading="lazy"
				className="mx-auto"
				alt={alt}
				width="135"
				height="135"
				src={icon}
			/>
			<div ref={ref} className="mt-3 text-2xl font-semibold" />
			<div className="mt-4 text-xl">{label}</div>
		</div>
	);
};
