import type { ActionFunctionArgs } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { AboutMe } from '~/components/sections/about-me';
import { Contact, ContactFormAlert } from '~/components/sections/contact';
import { Contributions } from '~/components/sections/contributions';
import { CoreValues } from '~/components/sections/core-values';
import { CoursesAndConferences } from '~/components/sections/courses-and-conferences';
import { ExperienceAndEducation } from '~/components/sections/experience-and-education';
import { Facts } from '~/components/sections/facts';
import { Header } from '~/components/sections/header';
import { Languages } from '~/components/sections/languages';
import { ServiceOffer } from '~/components/sections/service-offer';
import { Skills } from '~/components/sections/skills';
import { Testimonials } from '~/components/sections/testimonials';
import { sendMail } from '~/services/mail.server';

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;
	return await sendMail(name, email, message);
}

const ALERT_DURATION = 5000;

// eslint-disable-next-line import/no-default-export
export default function _index() {
	const data = useActionData<typeof action>();
	const [isContactFormAlertVisible, setIsContactFormAlertVisible] =
		useState(false);
	useEffect(() => {
		if (data && 'success' in data) {
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
			<div className="text-2xl font-bold text-center pt-4">Why you should hire me?</div>
			<div className="flex w-full flex-col">
				<div className="">
					<Facts />
					<ServiceOffer />
					<Skills />
					<Languages />
					<CoreValues />
					<Testimonials />
					<ExperienceAndEducation />
					<Contributions />
					<CoursesAndConferences />
					<AboutMe />
				</div>
			</div>
			<AnimatePresence>
				{isContactFormAlertVisible && (
					<ContactFormAlert type={data?.success ? 'success' : 'error'} />
				)}
			</AnimatePresence>
		</main>
	);
}
