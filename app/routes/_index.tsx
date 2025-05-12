import React from "react";
import { Outlet } from "react-router";

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
		<main className="overflow-x-hidden text-base font-normal">
			<Header />
			<div className="flex w-full flex-col">
				<div className="">
					<ServiceOffer />
					<Skills />
					<Facts />
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
