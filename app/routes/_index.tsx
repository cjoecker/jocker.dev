import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { ActionFunctionArgs } from "react-router";
import { useActionData } from "react-router";

import { AboutMe } from "~/components/sections/about-me";
import { Contact, ContactFormAlert } from "~/components/sections/contact";
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
import { sendMail } from "~/services/mail.server";

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;
	return await sendMail(name, email, message);
}

const ALERT_DURATION = 5000;

export default function Index() {
	const data = useActionData<typeof action>();
	const [isContactFormAlertVisible, setIsContactFormAlertVisible] =
		useState(false);
	useEffect(() => {
		if (data && "success" in data) {
			setIsContactFormAlertVisible(true);
			if (data.success) {
				setTimeout(() => {
					setIsContactFormAlertVisible(false);
				}, ALERT_DURATION);
			}
		}
	}, [data]);
	return (
		<main className="overflow-x-hidden text-base font-normal">
			<Header />
			<div className="flex w-full flex-col">
				<div className="">
					<ServiceOffer />
					<Facts />
					<Skills />
					<CoreValues />
					<ExperienceAndEducation />
					<Languages />
					<Testimonials />
					<Contributions />
					<CoursesAndConferences />
					<AboutMe />
					<Contact />
					<Footer />
				</div>
			</div>
			<AnimatePresence>
				{isContactFormAlertVisible && (
					<ContactFormAlert type={data?.success ? "success" : "error"} />
				)}
			</AnimatePresence>
		</main>
	);
}
