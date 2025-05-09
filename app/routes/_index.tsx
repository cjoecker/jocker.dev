import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useLocation } from "react-use";

import { AboutMe } from "~/components/sections/about-me";
import { Contact } from "~/components/sections/contact";
import { Contributions } from "~/components/sections/contributions";
import { CoreValues } from "~/components/sections/core-values";
import { CoursesAndConferences } from "~/components/sections/courses-and-conferences";
import { ExperienceAndEducation } from "~/components/sections/experience-and-education";
import { Facts } from "~/components/sections/facts";
import { Footer } from "~/components/sections/footer";
import { Header } from "~/components/sections/header";
import { Languages } from "~/components/sections/languages";
import { ServiceOffer } from "~/components/sections/service-offer";
import { Skills } from "~/components/sections/skills";
import { Testimonials } from "~/components/sections/testimonials";
import { Button, ButtonIcon } from "~/components/shared/button";
import { ContactInformation } from "~/constants/contact-information";
import useVisibleSection from "~/hooks/use-visible-section";

export default function Index() {
	return (
		<main className="overflow-x-hidden text-base font-normal">
			<Header />
			<div className="flex w-full flex-col">
				<div className="">
					<ServiceOffer />
					<CoreValues />
					<Skills />
					<Facts />
					<Testimonials />
					<ExperienceAndEducation />
					<Contributions />
					<CoursesAndConferences />
					<Languages />
					<AboutMe />
					<Contact />
					<Footer />
				</div>
			</div>
			<Outlet />
			<MessageFloatingButton />
		</main>
	);
}

// empty string is the header section
const hiddenMessageButtonSections = new Set([
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
