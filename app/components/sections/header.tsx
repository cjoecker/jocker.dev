import type { MotionValue } from 'framer-motion';
import {
	animate,
	motion,
	useAnimation,
	useMotionValue,
	useScroll,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMouse } from 'react-use';

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
	const { elX, elY } = useMouse(ref);
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
			onPointerMove={() => {
				mouseX.set(elX / 8);
				mouseY.set(elY / 8);
			}}
			className={`relative flex w-full items-center  ${
				isIphone ? 'h-ios-screen' : 'h-screen'
			}`}
			ref={ref}
		>
			<Background mouseX={mouseX} mouseY={mouseY} />
			<div
				className={`z-10 ml-6 mb-8 text-left sm:mt-[20vh] sm:ml-24 sm:mb-20`}
			>
				<motion.h1 style={{ y: titleY }} className="mb-8 text-2xl font-bold">
					Hi, I'm Christian Jöcker,
					<br />
					{'a '}
					{<AnimatedWord />}
				</motion.h1>
				<motion.p
					style={{ y: subtitleY }}
					className="mr-4 mb-16 text-lg font-normal sm:mb-28 md:mr-[25vw]"
				>
					I work as a freelance developer and designer, and am passionate about
					creating great experiences with beautiful web applications!
				</motion.p>
				<motion.button
					style={{ y: buttonY, boxShadow: '0px 0px 90px -15px #00DFD8' }}
					whileTap={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					onClick={onDiscoverMoreClick}
					className="select-none rounded-md bg-gradient-to-br from-turquoise to-blue text-lg font-semibold text-secondary hover:cursor-pointer"
				>
					<div className="pointer-events-none m-[1px] rounded-md bg-neutral-dark/80 py-4 px-6">
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
				aria-hidden="true"
				style={{ x: mouseX, y: mouseY }}
				className="absolute right-[-40vw] top-[-30vh] h-[85vh] w-[130vw]"
				src={MeshPurple}
			/>
			<motion.img
				aria-hidden="true"
				style={{ x: blueMeshX, y: blueMeshY }}
				className="absolute right-[-45vw] top-[-5vh] h-[120vh] w-[120vw]"
				src={MeshTurquoise}
			/>
			<motion.img
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
const STAGGER_DURATION = 0.02;
const TIMES = {
	start: 2000,
	reading: 3000,
	firstWordAnimation: ANIMATED_WORDS[0].length * STAGGER_DURATION * 1000 + 300,
	secondWordAnimation: ANIMATED_WORDS[1].length * STAGGER_DURATION * 1000 + 300,
};
function AnimatedWord() {
	const [animatedText, setAnimatedText] = useState(ANIMATED_WORDS[0]);
	const [isAnimatedTextVisible, setIsAnimatedTextVisible] = useState(true);
	const [startAnimation, setStartAnimation] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		const animateText = () => {
			setTimeout(() => {
				// delete the first word
				setStartAnimation(true);
				setIsAnimatedTextVisible(false);

				setTimeout(() => {
					// add the second word
					setAnimatedText(ANIMATED_WORDS[1]);
					setIsAnimatedTextVisible(true);

					setTimeout(() => {
						// delete the second word
						setIsAnimatedTextVisible(false);

						setTimeout(() => {
							// add the first word
							setAnimatedText(ANIMATED_WORDS[0]);
							setIsAnimatedTextVisible(true);
						}, TIMES.secondWordAnimation);
					}, TIMES.reading);
				}, TIMES.firstWordAnimation);
			}, TIMES.start);
		};

		animateText();
		const interval = setInterval(() => {
			animateText();
		}, TIMES.firstWordAnimation + TIMES.reading + TIMES.secondWordAnimation + TIMES.reading);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (isAnimatedTextVisible) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, isAnimatedTextVisible]);

	const wordAnimation = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<motion.span
			aria-label={animatedText}
			role="text"
			transition={{
				staggerChildren: STAGGER_DURATION,
				staggerDirection: isAnimatedTextVisible ? 1 : -1,
			}}
			animate={controls}
			initial={startAnimation ? 'hidden' : 'visible'}
		>
			{animatedText.split('').map((character, index) => {
				return (
					<motion.div
						aria-hidden="true"
						key={index + character + animatedText}
						className="inline-block whitespace-nowrap"
						variants={wordAnimation}
					>
						{character.replace(' ', '\u00A0')}
					</motion.div>
				);
			})}
		</motion.span>
	);
}