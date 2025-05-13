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
		title: "Low-Code Apps",
		description: (
			<>
				<Paragraph>
					Why reinvent the wheel? Not every app needs to be built from scratch.
				</Paragraph>
				<Paragraph>
					I help you decide if a low-code tool like Mendix or Bubble fits your
					idea. Then we will build it fast and right!
				</Paragraph>
				<Paragraph>
					Simple, cost-effective, and tailored to your needs.
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
