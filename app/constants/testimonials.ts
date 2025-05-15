import DavidPhoto from "../images/david.webp";
import NewspectiveLogo from "../images/newspective-logo.svg";
import PaulaPhoto from "../images/paula.webp";
import SlectedMeLogo from "../images/slected-me.svg";
import SmartCube360Logo from "../images/smart-cube-360.svg";
import ThomasPhoto from "../images/thomas.png";

import { TranslationKey } from "~/middleware/i18next";

export const testimonials: TestimonialsType[] = [
	{
		testimonialKey: "davidTestimonial",
		person: "David Forino",
		photo: DavidPhoto,
		company: "slectedMe",
		companyLogo: SlectedMeLogo,
		companyHeight: 70,
		titleKey: "ctoAndCoFounder",
	},
	{
		testimonialKey: "thomasTestimonial",
		person: "Thomas Kirner",
		photo: ThomasPhoto,
		company: "smartCube360",
		companyLogo: SmartCube360Logo,
		companyHeight: 70,
		titleKey: "ceoAndCoFounder",
	},
	{
		testimonialKey: "paulaTestimonial",
		person: "Paula Montesa Rausell",
		photo: PaulaPhoto,
		company: "newspective",
		companyLogo: NewspectiveLogo,
		companyHeight: 80,
		titleKey: "headOfStrategy",
	},
];

export interface TestimonialsType {
	testimonialKey: TranslationKey;
	person: string;
	photo: string;
	company: string;
	companyLogo: string;
	companyHeight: number;
	titleKey: TranslationKey;
}
