import { AnimatePresence, MotionValue } from 'framer-motion';
import {
	animate,
	motion,
	useAnimation,
	useMotionValue,
	useScroll,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import MeshBlue from '../../images/mesh-blue.svg';
import MeshPurple from '../../images/mesh-purple.svg';
import MeshTurquoise from '../../images/mesh-turquoise.svg';

export const Header = () => {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll({ target: ref });
	const titleY = useParallax(scrollY, -0.25);
	const subtitleY = useParallax(scrollY, -0.5);
	const buttonY = useParallax(scrollY, -1);

	// there is a bug in chromium that is not showing -webkit-fill-available correctly
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const [isIphone, setIsIphone] = useState(false);

	useEffect(() => {
		setIsIphone(window.navigator.userAgent.includes('iPhone'));
	}, []);

	const onDiscoverMoreClick = (e: React.MouseEvent) => {
		(e.target as HTMLButtonElement).blur();

		if (ref.current) {
			const targetTop = ref.current.offsetTop + ref.current.offsetHeight;
			animate(window.scrollY, targetTop, {
				duration: 2.5,
				onUpdate(value) {
					window.scrollTo(0, value);
				},
				ease: 'easeInOut',
			});
		}
	};

	return (
		<div
			className={`relative flex w-full items-center  ${
				isIphone ? 'h-ios-screen' : 'h-screen'
			}`}
			ref={ref}
		>
			<Background mouseX={mouseX} mouseY={mouseY} />
			<div
				className={`z-10 mb-8 ml-6 mt-4 text-left sm:mb-20 sm:ml-24 sm:mt-[20vh]`}
			>
				<motion.h1
					style={{ y: titleY }}
					className="mx-2 mb-8 text-2xl font-bold sm:text-3xl"
				>
					Hi, I'm Christian Jöcker,
					<br />
					<AnimatedWord />
				</motion.h1>
				<motion.p
					style={{ y: subtitleY }}
					className="mb-16 mr-4 text-md font-normal sm:mb-28 sm:text-lg md:mr-[25vw]"
				>
					I work as a freelance developer and designer, and am passionate about
					creating great experiences with beautiful web applications!
				</motion.p>
				<motion.button
					style={{ y: buttonY, boxShadow: '0px 0px 90px -15px #00DFD8' }}
					whileTap={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					onClick={onDiscoverMoreClick}
					className="select-none rounded-md bg-linear-to-br from-turquoise to-blue text-lg font-semibold text-secondary hover:cursor-pointer"
				>
					<div className="pointer-events-none m-[1px] rounded-md bg-neutral-dark/80 px-6 py-4">
						Discover More
					</div>
				</motion.button>
			</div>
		</div>
	);
};
export type Props = {
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
};
export const Background = ({ mouseX, mouseY }: Props) => {
	const blueMeshX = useTransform(mouseX, value => value * -0.7);
	const blueMeshY = useTransform(mouseY, value => value * -0.5);
	return (
		<>
			<motion.img
				alt=""
				aria-hidden="true"
				style={{ x: mouseX, y: mouseY }}
				className="absolute right-[-40vw] top-[-30vh] h-[85vh] w-[130vw]"
				src={MeshPurple}
			/>
			<motion.img
				alt=""
				aria-hidden="true"
				style={{ x: blueMeshX, y: blueMeshY }}
				className="absolute right-[-45vw] top-[-5vh] h-[120vh] w-[120vw]"
				src={MeshTurquoise}
			/>
			<motion.img
				alt=""
				aria-hidden="true"
				className="absolute left-[-35vw] top-[-10vh] h-[100vh] w-[100vw]"
				src={MeshBlue}
			/>
		</>
	);
};

function useParallax(scrollY: MotionValue<number>, multiplicator: number) {
	return useTransform(scrollY, value => value * multiplicator);
}

const ANIMATED_WORDS = ['Full-Stack Developer.', 'UX/UI Designer.'];
const STAGGER_DURATION = 0.03;

const READING_TIME = 2500;
const HIDE_TIME_OFFSET = 200;
const SPACE_CHAR = '\u00A0';

function AnimatedWord() {
	const [visibility, setVisibility] = useState(true);
	const [wordIndex, setWordIndex] = useState(0);
	const animatedText = ANIMATED_WORDS[wordIndex];
	const textLength = animatedText.length;
	const ariaLabel = ANIMATED_WORDS.join(' and ').replace(/\./g, '');

	useEffect(() => {
		const changeText = () => {
			setWordIndex(prevIndex => (prevIndex + 1) % ANIMATED_WORDS.length);
		};
		const hideText = () => {
			setVisibility(false);
			setTimeout(changeText, textLength * STAGGER_DURATION * 1000);
			setTimeout(
				showText,
				textLength * STAGGER_DURATION * 1000 + HIDE_TIME_OFFSET
			);
		};
		const showText = () => {
			setVisibility(true);
			setTimeout(hideText, READING_TIME);
		};
		showText();
	}, []);

	const words = animatedText.split(' ');
	return (

			<span className="flex flex-wrap" role="text" aria-label={ariaLabel}>
				{`a${SPACE_CHAR}`}
				{/* Words split for wrapping them on narrow screens */}
				{words.map((word, wordIndex) => {
					const wordWithSpaces =
						wordIndex + 1 === words.length ? word : word + SPACE_CHAR;
					const letters = wordWithSpaces.split('');
					const prevWordsLength = words
						.slice(0, wordIndex)
						.reduce((acc, curr) => acc + curr.length, 0);

					return (
						<span
							aria-hidden={true}
							className="flex flex-nowrap"
							key={wordIndex + word + animatedText}
						>
							<AnimatePresence>
								{letters.map((letter, index) => {
									if (!visibility) {
										return null;
									}
									return (
										<motion.div
											variants={{
												hidden: {
													opacity: 0,
													transition: {
														// delay instead of stagger to allow word wrapping on narrow screens
														delay:
															(textLength - prevWordsLength - index - 1) *
															STAGGER_DURATION,
													},
												},
												visible: {
													opacity: 1,
													transition: {
														delay: (prevWordsLength + index) * STAGGER_DURATION,
													},
												},
											}}
											key={index + letter + word}
											initial={'hidden'}
											animate={'visible'}
											exit={'hidden'}
										>
											{letter}
										</motion.div>
									);
								})}
							</AnimatePresence>
						</span>
					);
				})}
			</span>
	);
}
