import DavidPhoto from "../images/david.webp";
import NewspectiveLogo from "../images/newspective-logo.svg";
import PaulaPhoto from "../images/paula.webp";
import SlectedMeLogo from "../images/slected-me.svg";
import SmartCube360Logo from "../images/smart-cube-360.svg";
import ThomasPhoto from "../images/thomas.png";

export const testimonials: TestimonialsType[] = [
	{
		testimonialKey: "davidTestimonial",
		person: "David Forino",
		photo: DavidPhoto,
		companyKey: "slectedMe",
		companyLogo: SlectedMeLogo,
		companyHeight: 70,
		title: "CTO and co-founder",
	},
	{
		testimonialKey: "thomasTestimonial",
		person: "Thomas Kirner",
		photo: ThomasPhoto,
		companyKey: "smartCube360",
		companyLogo: SmartCube360Logo,
		companyHeight: 70,
		title: "CEO and co-founder",
	},
	{
		testimonialKey: "paulaTestimonial",
		person: "Paula Montesa Rausell",
		photo: PaulaPhoto,
		companyKey: "newspective",
		companyLogo: NewspectiveLogo,
		companyHeight: 80,
		title: "Head of Strategy",
	},
];

export interface TestimonialsType {
	testimonialKey: string;
	person: string;
	photo: string;
	companyKey: string;
	companyLogo: string;
	companyHeight: number;
	title: string;
}
