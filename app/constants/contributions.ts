import ThreePointEstimatorIcon from "../images/3-point-estimator.svg";
import CoreValuesFinderIcon from "../images/core-values-finder.svg";
import CurriculumGeneratorIcon from "../images/curriculum-generator.svg";
import DcideIcon from "../images/d-cide.svg";
import FramerMotionIcon from "../images/framer-motion.svg";
import MuiIcon from "../images/mui.svg";

export const StackOverflowDefaults: StackOverflowDefaultsType = {
	reputation: 4453,
	goldBadge: 1,
	silverBadge: 34,
	bronzeBadge: 40,
	profileUrl: "https://stackoverflow.com/users/4934446",
};

export const OpenSourceContributions: OpenSourceContributionsType[] = [
	{
		name: "MUI (Material-UI)",
		link: "https://mui.com/",
		icon: MuiIcon,
	},
	{
		name: "Framer Motion",
		link: "https://www.framer.com/motion/",
		icon: FramerMotionIcon,
	},
];

export const OwnApps: OwnAppsType[] = [
	{
		name: "d-cide",
		description: "Rational decision making made easy.",
		link: "https://d-cide.me/",
		icon: DcideIcon,
	},
	{
		name: "Core Values Finder",
		description: "Give a name to your core values.",
		link: "https://cjoecker.github.io/core-values-finder/",
		icon: CoreValuesFinderIcon,
	},
	{
		name: "3 Point Estimator",
		description: "Make effort estimations in a safe and easy way.",
		link: "https://cjoecker.github.io/3-point-estimator/",
		icon: ThreePointEstimatorIcon,
	},
	{
		name: "Curriculum Generator",
		description: "Generate your CV in neumorphic style",
		link: "https://github.com/cjoecker/curriculum-generator",
		icon: CurriculumGeneratorIcon,
	},
];

export interface StackOverflowDefaultsType {
	reputation: number;
	goldBadge: number;
	silverBadge: number;
	bronzeBadge: number;
	profileUrl: string;
}

export interface OwnAppsType {
	name: string;
	description: string;
	link: string;
	icon: string;
}

export interface OpenSourceContributionsType {
	name: string;
	link: string;
	icon: string;
}
