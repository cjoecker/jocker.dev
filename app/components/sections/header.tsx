import { MotionValue } from "framer-motion";
import {
	animate,
	motion,
	useAnimation,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMouse } from "react-use";

import MeshBlue from "../../images/mesh-blue.svg";
import MeshPurple from "../../images/mesh-purple.svg";
import MeshTurquoise from "../../images/mesh-turquoise.svg";

import { useEffectUnsafe } from "~/hooks/unsafe-hookst";

export const Header = () => {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll({ target: ref });
	const titleY = useParallax(scrollY, -0.25);
	const subtitleY = useParallax(scrollY, -0.5);
	const buttonY = useParallax(scrollY, -1);

	// there is a bug in chromium that is not showing -webkit-fill-available correctly
	const { elX, elY } = useMouse(ref as never);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const onDiscoverMoreClick = (e: React.MouseEvent) => {
		(e.target as HTMLButtonElement).blur();

		if (ref.current) {
			const targetTop = ref.current.offsetTop + ref.current.offsetHeight;
			animate(window.scrollY, targetTop, {
				duration: 2.5,
				onUpdate(value) {
					window.scrollTo(0, value);
				},
				ease: "easeInOut",
			});
		}
	};

	return (
		<div
			onPointerMove={() => {
				mouseX.set(elX / 8);
				mouseY.set(elY / 8);
			}}
			className={`relative flex w-full items-center h-dvh`}
			ref={ref}
		>
			<Background mouseX={mouseX} mouseY={mouseY} />
			<div
				className={
					"z-10 mt-4 mb-8 ml-6 text-left sm:mt-[20vh] sm:mb-20 sm:ml-24"
				}
			>
				<motion.h1
					style={{ y: titleY }}
					className="mx-2 mb-8 text-2xl font-bold sm:text-3xl"
				>
					Hi, I&#39;m Christian Jöcker,
					<br />
					<AnimatedWord />
				</motion.h1>
				<motion.p
					style={{ y: subtitleY }}
					className="text-md mr-4 mb-16 font-normal sm:mb-28 sm:text-lg md:mr-[25vw]"
				>
					I don&#39;t just code features, I help you build scalable apps with
					amazing user experiences and code that holds up!
				</motion.p>
				<motion.button
					style={{ y: buttonY, boxShadow: "0px 0px 90px -15px #00DFD8" }}
					whileTap={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					onClick={onDiscoverMoreClick}
					className="from-turquoise to-blue text-secondary rounded-md bg-linear-to-br text-lg font-semibold select-none hover:cursor-pointer"
				>
					<div className="bg-neutral-dark/80 pointer-events-none m-[1px] rounded-md px-6 py-4">
						Discover More
					</div>
				</motion.button>
			</div>
		</div>
	);
};
export interface Props {
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
}
export const Background = ({ mouseX, mouseY }: Props) => {
	const blueMeshX = useTransform(mouseX, (value) => {
		return value * -0.7;
	});
	const blueMeshY = useTransform(mouseY, (value) => {
		return value * -0.5;
	});
	return (
		<>
			<motion.img
				alt=""
				aria-hidden="true"
				style={{ x: mouseX, y: mouseY }}
				className="absolute top-[-30vh] right-[-40vw] h-[85vh] w-[130vw]"
				src={MeshPurple}
			/>
			<motion.img
				alt=""
				aria-hidden="true"
				style={{ x: blueMeshX, y: blueMeshY }}
				className="absolute top-[-30vh] md:top-[-5vh] right-[-45vw] h-[120vh] w-[120vw]"
				src={MeshTurquoise}
			/>
			<motion.img
				alt=""
				aria-hidden="true"
				className="absolute top-[-10vh] left-[-35vw] h-[100vh] w-[100vw]"
				src={MeshBlue}
			/>
		</>
	);
};

function useParallax(scrollY: MotionValue<number>, multiplicator: number) {
	return useTransform(scrollY, (value) => {
		return value * multiplicator;
	});
}

const ANIMATED_WORDS = ["Full-Stack Developer.", "UX/UI Designer."];
const STAGGER_DURATION = 0.03;

const READING_TIME = 2500;
const HIDE_TIME_OFFSET = 200;
const SPACE_CHAR = "\u00A0";

function AnimatedWord() {
	const [wordIndex, setWordIndex] = useState(0);
	const animatedText = ANIMATED_WORDS[wordIndex];
	const textLength = animatedText.length;
	const ariaLabel = ANIMATED_WORDS.join(" and ").replaceAll(".", "");
	const controls = useAnimation();
	const [animationStarted, setAnimationStarted] = useState(false);

	useEffectUnsafe(() => {
		const changeText = () => {
			setWordIndex((prevIndex) => {
				return (prevIndex + 1) % ANIMATED_WORDS.length;
			});
		};
		const hideText = () => {
			void controls.start("hidden");
			setTimeout(changeText, textLength * STAGGER_DURATION * 1000);
			setTimeout(
				showText,
				textLength * STAGGER_DURATION * 1000 + HIDE_TIME_OFFSET,
			);
		};
		const showText = () => {
			if (!animationStarted) {
				setAnimationStarted(true);
			}
			void controls.start("visible");
			setTimeout(hideText, READING_TIME);
		};
		showText();
	}, []);

	const words = animatedText.split(" ");
	return (
		<span className="flex flex-wrap" aria-label={ariaLabel}>
			{`a${SPACE_CHAR}`}
			{/* Words split for wrapping them on narrow screens */}
			{words.map((word, wordIndex) => {
				const wordWithSpaces =
					wordIndex + 1 === words.length ? word : word + SPACE_CHAR;
				// eslint-disable-next-line @typescript-eslint/no-misused-spread
				const letters = [...wordWithSpaces];
				const prevWordsLength = words
					.slice(0, wordIndex)
					.reduce((acc, curr) => {
						return acc + curr.length;
					}, 0);

				return (
					<span
						aria-hidden={true}
						className="flex flex-nowrap"
						key={`${wordIndex}${word}${animatedText}`}
					>
						{letters.map((letter, index) => {
							return (
								<motion.div
									initial={{
										opacity: animationStarted ? 0 : 1,
									}}
									animate={controls}
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
									key={`${index}${letter}${word}`}
								>
									{letter}
								</motion.div>
							);
						})}
					</span>
				);
			})}
		</span>
	);
}
