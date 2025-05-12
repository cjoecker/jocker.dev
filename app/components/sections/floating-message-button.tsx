import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useLocation } from "react-use";

import { Button, ButtonIcon } from "~/components/shared/button";
import { ContactInformation } from "~/constants/contact-information";
import useVisibleSection from "~/hooks/use-visible-section";

const hiddenMessageButtonSections = new Set([
	// empty string is the header section
	"",
	"what_i_can_do_for_you",
	"contact_me!",
]);

const animationVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 0,
		x: 0,
		transition: {
			type: "easeOut",
			duration: 0.3,
		},
	},
	visible: {
		opacity: 1,
		y: -100,
		x: 0,
		transition: {
			type: "spring",
			bounce: 0.65,
			duration: 1.2,
		},
	},
	shake: {
		opacity: 1,
		y: 0,
		x: [-20, 20, -15, 15, -10, 0],
		transition: {
			type: "easeInOut",
			duration: 0.7,
		},
	},
};

const SHAKE_TIMEOUT = 2000;

export const MessageFloatingButton = () => {
	const { visibleSection } = useVisibleSection();
	const navigate = useNavigate();
	const contactInformation = ContactInformation.find((contact) => {
		return contact.alt === "message";
	});
	// get current path from remix
	const location = useLocation();
	const controls = useAnimation();

	useEffect(() => {
		if (
			hiddenMessageButtonSections.has(visibleSection) ||
			location.pathname === "/contact"
		) {
			void controls.start("hidden");
		} else if(visibleSection.includes("community_contributions")) {
			setTimeout(() => {
				void controls.start("shake");
			}, SHAKE_TIMEOUT);
		}else{
			void controls.start("visible");
		}
	}, [visibleSection, location, controls]);

	if (!contactInformation) {
		return null;
	}

	return (
		<motion.div
			className="fixed right-2 bottom-[-92px] z-50"
			animate={controls}
			variants={animationVariants}
		>
			<Button
				iconButton
				ariaLabel={contactInformation.text}
				onClick={() => {
					void navigate("/contact", { preventScrollReset: true });
				}}
			>
				<ButtonIcon
					alt={contactInformation.alt}
					src={contactInformation.image}
				/>
			</Button>
		</motion.div>
	);
};
