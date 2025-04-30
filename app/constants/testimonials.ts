import DavidPhoto from "../images/david.webp";
import MaibornWolffLogo from "../images/maibornwolff.svg";
import PaulaPhoto from "../images/paula.webp";
import SlectedMeLogo from "../images/slected-me.svg";
import SmartCube360Logo from "../images/smart-cube-360.svg";
import ThomasPhoto from "../images/thomas.png";

export const testimonials: TestimonialsType[] = [
	{
		testimonial: `Christian is a very creative person with attention to details. 
    He really puts effort in developing what makes sense for the end user. 
    He is also a fan of clean code and good architecture.`,
		person: "David Forino",
		photo: DavidPhoto,
		company: "Slected.me GmbH",
		companyLogo: SlectedMeLogo,
		companyHeight: 70,
		title: "CTO and co-founder",
	},
	{
		testimonial: `Christian is always reliable! He not only tackles his tasks with determination, but also consistently offers suggestions on how to make our software even more user-friendly. 
		All with complete cost transparency! Anyone who gets to work with him is truly lucky!`,
		person: "Thomas Kirner",
		photo: ThomasPhoto,
		company: "smart cube 360 GmbH",
		companyLogo: SmartCube360Logo,
		companyHeight: 70,
		title: "CEO and co-founder",
	},
	{
		testimonial: `He perfectly embodies the role of a skilled developer, 
    who not only masters his technologies but also has amazing UX know-how. 
    Both his creativity and entrepreneurial mindset bring his projects and the company forward.`,
		person: "Paula Montesa Rausell",
		photo: PaulaPhoto,
		company: "MaibornWolff GmbH",
		companyLogo: MaibornWolffLogo,
		companyHeight: 50,
		title: "Lead Digital Design Engineer",
	},
];

export interface TestimonialsType {
	testimonial: string;
	person: string;
	photo: string;
	company: string;
	companyLogo: string;
	companyHeight: number;
	title: string;
}
