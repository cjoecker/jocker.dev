import { motion } from "framer-motion";
import React from "react";

import { Section } from "../shared/section";

import { Button, ButtonIcon } from "~/components/shared/button";
import { calendlyUrl } from "~/constants/misc";
import { useNavigate } from "~/hooks/use-navigate";
import EmailIcon from "~/images/email.svg";
import GithubIcon from "~/images/github.svg";
import LinkedinIcon from "~/images/linkedin.svg";
import VideoCallIcon from "~/images/video-call.svg";

export interface ContactInformationType {
	alt: string;
	text: string;
	href: string;
	image: string;
}

export const ContactInformation: ContactInformationType[] = [
	{
		alt: "video-call",
		text: "schedule a video call",
		href: calendlyUrl,
		image: VideoCallIcon,
	},
	{
		alt: "message",
		text: "send a message",
		href: "/contact",
		image: EmailIcon,
	},
	{
		alt: "linkedin",
		text: "christianjoecker",
		href: "https://www.linkedin.com/in/christianjoecker/",
		image: LinkedinIcon,
	},
	{
		alt: "github",
		text: "cjoecker",
		href: "https://github.com/cjoecker",
		image: GithubIcon,
	},
];
export const Contact = () => {
	return (
		<Section titleKey="contact" isLast>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.5, once: true }}
				transition={{
					staggerChildren: 0.1,
				}}
				className="mx-auto flex flex-wrap justify-center gap-9"
			>
				<div className="flex flex-wrap justify-center gap-9">
					<ContactButton contactInformation={ContactInformation[0]} />
					<ContactButton contactInformation={ContactInformation[1]} />
				</div>
				<div className="flex flex-wrap justify-center gap-9">
					<ContactButton contactInformation={ContactInformation[2]} />
					<ContactButton contactInformation={ContactInformation[3]} />
				</div>
			</motion.div>
		</Section>
	);
};

export const ContactButton = ({
	contactInformation,
}: {
	contactInformation: ContactInformationType;
}) => {
	const isMessageButton = contactInformation.alt === "message";
	const navigate = useNavigate();
	const href = isMessageButton ? undefined : contactInformation.href;
	const handleClick = isMessageButton
		? () => {
				void navigate("/contact", { preventScrollReset: true });
			}
		: undefined;
	return (
		<Button
			iconButton
			ariaLabel={contactInformation.text}
			onClick={handleClick}
			href={href}
		>
			<ButtonIcon alt={contactInformation.alt} src={contactInformation.image} />
		</Button>
	);
};
