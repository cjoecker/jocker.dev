import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router";

import { Section } from "../shared/section";

import { Button, ButtonIcon } from "~/components/shared/button";
import { ExternalRedirect } from "~/components/shared/external-redirect";
import type { ContactInformationType } from "~/constants/contact-information";
import { ContactInformation } from "~/constants/contact-information";

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
	return (
		<Button
			iconButton
			ariaLabel={contactInformation.text}
			onClick={() => {
				if (isMessageButton) {
					void navigate("/contact", { preventScrollReset: true });
				}
			}}
		>
			{isMessageButton ? (
				<ButtonIcon
					alt={contactInformation.alt}
					src={contactInformation.image}
				/>
			) : (
				<ExternalRedirect
					className="flex h-full w-full"
					to={contactInformation.href}
				>
					<ButtonIcon
						alt={contactInformation.alt}
						src={contactInformation.image}
					/>
				</ExternalRedirect>
			)}
		</Button>
	);
};
