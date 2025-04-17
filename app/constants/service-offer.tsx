import { ReactNode } from "react";

import ArtistImg from "../images/artist.svg";
import FaceWithSunglassesImg from "../images/face-with-sunglasses.svg";
import RobotImg from "../images/robot.svg";
import RocketImg from "../images/rocket.svg";
import StrategyImg from "../images/strategy.svg";

import { EXPERIENCE_YEARS } from "./experience-and-education";

import { Paragraph } from "~/components/shared/paragraph";

export const ServiceOfferData: ServiceOfferType[] = [
	{
		logo: FaceWithSunglassesImg,
		title: "Web Applications",
		description: (
			<>
				<Paragraph>
					Get ready for a platform that&#39;s not just good-looking, but built
					to last!
				</Paragraph>
				<Paragraph>
					Let me take your idea from concept to launch, delivering a scalable
					solution tailored to your business.
				</Paragraph>
				<Paragraph>
					Say goodbye to clumsy web applications and prepare for a digital
					experience that will make your users say WOW!
				</Paragraph>
			</>
		),
	},
	{
		logo: ArtistImg,
		title: "UX/UI Design",
		description: (
			<>
				<Paragraph>
					I&#39;ll take your digital dreams and turn them into pixel-perfect
					realities that not only look good, but feel great too.
				</Paragraph>
				<Paragraph>
					I&#39;ll make sure that every click, tap, and swipe is a delightful
					experience for your customers.
				</Paragraph>
				<Paragraph>Sit back, relax, and let the magic begin!</Paragraph>
			</>
		),
	},
	{
		logo: RobotImg,
		title: "IoT Platforms",
		description: (
			<>
				<Paragraph>
					Step into the future with my IoT platform expertise! Let&#39;s turn
					your ideas into cutting-edge solutions that connect the physical world
					to the digital one.
				</Paragraph>
				<Paragraph>
					Whether you&#39;re looking to connect your devices, revolutionize your
					business, or simply unleash your inner tech-savant, I&#39;ve got you
					covered.
				</Paragraph>
			</>
		),
	},
	{
		logo: RocketImg,
		title: "Rapid Application Development",
		description: (
			<>
				<Paragraph>
					With a focus on speed and efficiency, I&#39;ll take your ideas and
					turn them into fully-functional, scalable solutions before you can say
					&#34;launch day&#34;.
				</Paragraph>
				<Paragraph>
					Perfect for proof of concepts or MVPs, my solutions will help you
					validate your ideas and get to market faster than you ever thought
					possible.
				</Paragraph>
			</>
		),
	},
	{
		logo: StrategyImg,
		title: "Digital Strategy Consulting",
		description: (
			<>
				<Paragraph>
					With over {EXPERIENCE_YEARS} years of experience in the tech industry
					and a track record of success with digital products across multiple
					industries, I&#39;ve got the expertise you need to succeed.
				</Paragraph>
				<Paragraph>
					If you&#39;re looking to launch a new product, reinvigorate an
					existing one, or simply up your game, I&#39;ll help you map out a
					roadmap for success.
				</Paragraph>
			</>
		),
	},
];

export interface ServiceOfferType {
	logo: string;
	title: string;
	description: ReactNode;
}
