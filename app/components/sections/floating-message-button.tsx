import { AnimatePresence, motion } from "framer-motion";
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

export const MessageFloatingButton = () => {
	const { visibleSection } = useVisibleSection();
	const [isVisible, setIsVisible] = useState(false);
	const navigate = useNavigate();
	const contactInformation = ContactInformation.find((contact) => {
		return contact.alt === "message";
	});
	// get current path from remix
	const location = useLocation();

	useEffect(() => {
		if (
			hiddenMessageButtonSections.has(visibleSection) ||
			location.pathname === "/contact"
		) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	}, [visibleSection, location]);

	if (!contactInformation) {
		return null;
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed right-2 bottom-2 z-50"
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ type: "spring", bounce: 0.65, duration: 1.2 }}
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
			)}
		</AnimatePresence>
	);
};
