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
		<Section title="What I Can Do for You" className={'mt-16'}>
			<div className="relative flex">
				<img
					alt=""
					aria-hidden="true"
					className=" absolute left-1/2 top-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
					src={MeshPurpleTurquoise}
				/>
				<motion.div
					className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6"
					{...staggerAnimation}
				>
					{ServiceOfferData.map(offer => {
						return (
							<Card
								key={offer.title}
								offer={offer}
								isNarrowView={isNarrowView}
							/>
						);
					})}
				</motion.div>
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
	const [isOpen, setIsOpen] = useState(false);
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
		<motion.div
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			transition={{ ease: 'easeInOut', duration: 0.8 }}
			key={offer.title}
			{...appearAnimation}
		>
			{isOpen && (
				<div className="relative z-0">
					<CardContent offer={offer} isOpen={isOpen} />
				</div>
			)}
			<motion.div
				onClick={onClick}
				style={{ zIndex }}
				layout
				className={` ${
					isOpen ? 'fixed inset-0 z-10 mx-3 flex' : 'relative z-0'
				}`}
			>
				<CardContent isExpandable offer={offer} isOpen={isOpen} />
			</motion.div>
		</motion.div>
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
		<motion.div
			layout={isExpandable}
			className={`relative flex cursor-pointer whitespace-pre-wrap rounded-2xl border-2 border-solid border-secondary/10 bg-gradient-to-br
              from-neutral to-neutral-dark p-4 text-left
              ${
								isOpen && isExpandable
									? 'm-auto h-auto w-full max-w-lg flex-wrap bg-gradient-to-br from-neutral/70 to-neutral-dark/70 backdrop-blur'
									: 'h-80 w-80 flex-col md:h-56 md:w-56'
							} ${isOpen && !isExpandable ? 'invisible' : 'visible'}`}
		>
			<motion.button
				layout={isExpandable ? 'preserve-aspect' : false}
				aria-label={isOpen ? 'expand' : 'contract'}
				className={`absolute right-2.5 top-2.5 cursor-pointer  p-2 ${
					isOpen ? 'h-7 w-7' : 'h-6 w-6'
				}`}
				style={{
					backgroundImage: isOpen
						? `url(${CollapseIcon})`
						: `url(${ExpandIcon})`,
				}}
			/>
			<motion.img
				layout={isExpandable ? 'preserve-aspect' : false}
				loading="lazy"
				alt={getAltTextFromFileName(offer.logo)}
				width={'70'}
				height={'70'}
				src={offer.logo}
				className={`pointer-events-none select-none ${
					isOpen
						? 'mx-4 mb-auto mt-4 h-[170px] w-[170px]'
						: 'my-4 h-[105px] w-[105px] md:h-[70px] md:w-[70px]'
				}`}
			/>
			<motion.div
				className={`flex-1 ${isOpen ? 'min-w-[230px]' : 'min-w-0'}`}
				layout={isExpandable}
			>
				<motion.h3
					layout={isExpandable ? 'preserve-aspect' : false}
					className={
						isOpen
							? 'mb-3 mr-4 mt-2 text-lg font-semibold'
							: 'mb-1 text-xl md:text-lg'
					}
				>
					{offer.title}
				</motion.h3>
				{isOpen && (
					<motion.div className="my-2 text-base">
						{offer.description}
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
};
