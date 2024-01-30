import { motion } from 'framer-motion';
import { useState } from 'react';

import type { ServiceOfferType } from '../../constants/service-offer';
import { ServiceOfferData } from '../../constants/service-offer';
import CollapseIcon from '../../images/collapse.svg';
import ExpandIcon from '../../images/expand.svg';
import MeshPurpleTurquoise from '../../images/mesh-purple-turquoise.svg';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

import { useNarrowView } from '~/hooks/useNarrowView';

export const ServiceOffer = () => {
	const { isNarrowView } = useNarrowView();
	const staggerAnimation = isNarrowView
		? {}
		: {
				viewport: { amount: 0.2, once: true },
				transition: {
					staggerChildren: 0.25,
				},
				initial: 'hidden',
				whileInView: 'visible',
		  };
	return (
		<Section title="What I Can Do for You">
			<div className="relative flex">
				<img
					alt=""
					aria-hidden="true"
					className=" invisible absolute left-1/2 top-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 sm:visible"
					src={MeshPurpleTurquoise}
				/>
				<div
					className="flex w-full justify-center gap-4 flex-wrap px-8"
					{...staggerAnimation}
				>
					{ServiceOfferData.map(offer => {
						return (
							<CardContent offer={offer} isOpen={true} />
						);
					})}
				</div>
			</div>
		</Section>
	);
};

const Card = ({
	offer,
	isNarrowView,
}: {
	offer: ServiceOfferType;
	isNarrowView: boolean;
}) => {
	const [isOpen, setIsOpen] = useState(true);
	const [zIndex, setZIndex] = useState(0);

	const onClick = () => {
		if (isOpen) {
			setIsOpen(false);
			//avoid card appear below the other while closing
			setTimeout(() => setZIndex(0), 500);
		} else {
			setIsOpen(true);
			setZIndex(10);
		}
	};
	const appearAnimation = isNarrowView
		? {
				initial: 'hidden',
				whileInView: 'visible',
				viewport: { amount: 0.5, once: true },
		  }
		: {};

	return (
			<CardContent offer={offer} isOpen={isOpen} />
	);
};

const CardContent = ({
	isExpandable,
	offer,
	isOpen,
}: {
	isExpandable?: boolean;
	offer: ServiceOfferType;
	isOpen: boolean;
}) => {
	return (
		<div
			className={`w-full min-w-full flex-1 flex whitespace-pre-wrap rounded-2xl border-2 border-solid border-secondary/10 
              p-2 text-left flex-wrap bg-gradient-to-br from-neutral/70 to-neutral-dark/70 backdrop-blur`}
		>
			<img
				loading="lazy"
				alt={getAltTextFromFileName(offer.logo)}
				width={'50'}
				height={'50'}
				src={offer.logo}
				className={`pointer-events-none select-none ${
					isOpen
						? 'mx-4 mb-auto mt-4 h-[130px] w-[130px]'
						: 'my-4 h-[105px] w-[105px] md:h-[70px] md:w-[70px]'
				}`}
			/>
			<div
				className={`flex-1 ${isOpen ? 'min-w-[230px]' : 'min-w-0'}`}
			>
				<h3
					className={
						isOpen ? 'mb-1 mr-4 mt-2 text-lg font-semibold' : 'mb-1 text-lg'
					}
				>
					{offer.title}
				</h3>
				{isOpen && (
					<div className="my-2 text-base">
						{offer.description}
					</div>
				)}
			</div>
		</div>
	);
};
