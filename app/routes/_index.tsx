import { motion } from "framer-motion";
import React from "react";
import { Outlet, useNavigation } from "react-router";

import { AboutMe } from "~/components/sections/about-me";
import { Contact } from "~/components/sections/contact";
import { Contributions } from "~/components/sections/contributions";
import { CoreValues } from "~/components/sections/core-values";
import { CoursesAndConferences } from "~/components/sections/courses-and-conferences";
import { ExperienceAndEducation } from "~/components/sections/experience-and-education";
import { Facts } from "~/components/sections/facts";
import { MessageFloatingButton } from "~/components/sections/floating-message-button";
import { Footer } from "~/components/sections/footer";
import { Header } from "~/components/sections/header";
import { Languages } from "~/components/sections/languages";
import { ServiceOffer } from "~/components/sections/service-offer";
import { Skills } from "~/components/sections/skills";
import { Testimonials } from "~/components/sections/testimonials";

export default function Index() {
	return (
		<main className="overflow-x-hidden text-base font-normal relative">
			<LoadingBar/>
			<Header />
			<div className="flex w-full flex-col">
				<div className="">
					<ServiceOffer />
					<Facts />
					<Skills />
					<CoreValues />
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



export const LoadingBar: React.FC = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state != "idle";

	if (!isLoading) {
		return null;
	}

	return (
		<div className={"fixed top-0 left-0 w-screen right-0 z-50 h-1 overflow-hidden bg-grey"}>
			<motion.div
				className="h-full bg-primary"
				initial={{ x: "-100%" }}
				animate={{
					x: "100%",
				}}
				transition={{
					repeat: Infinity,
					duration: 1.5,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
};
