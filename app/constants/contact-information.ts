import EmailIcon from "../images/email.svg";
import GithubIcon from "../images/github.svg";
import LinkedinIcon from "../images/linkedin.svg";
import VideoCallIcon from "../images/video-call.svg";

export interface ContactInformationType {
	alt: string;
	text: string;
	href: string;
	image: string;
}
export const ContactInformation: ContactInformationType[] = [
	{
		alt: "video-call",
		text: "schedule a video call",
		href: "https://calendly.com/jockerdev/30min",
		image: VideoCallIcon,
	},
	{
		alt: "message",
		text: "send a message",
		href: "/contact",
		image: EmailIcon,
	},
	{
		alt: "linkedin",
		text: "christianjoecker",
		href: "https://www.linkedin.com/in/christianjoecker/",
		image: LinkedinIcon,
	},
	{
		alt: "github",
		text: "cjoecker",
		href: "https://github.com/cjoecker",
		image: GithubIcon,
	},
];
