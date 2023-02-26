import EmailIcon from '../images/email.svg';
import GithubIcon from '../images/github.svg';
import LinkedinIcon from '../images/linkedin.svg';
import TwitterIcon from '../images/twitter.svg';

export type ContactInformationType = {
	alt: string;
	text: string;
	href: string;
	image: string;
};
export const ContactInformation: ContactInformationType[] = [
	{
		alt: 'email',
		text: 'c.jocker@hotmail.com',
		href: 'mailto:c.jocker@hotmail.com',
		image: EmailIcon,
	},
	{
		alt: 'linkedin',
		text: 'christianjoecker',
		href: 'https://www.linkedin.com/in/christianjoecker/',
		image: LinkedinIcon,
	},
	{
		alt: 'twitter',
		text: '@JockerDev',
		href: 'https://twitter.com/JockerDev',
		image: TwitterIcon,
	},
	{
		alt: 'github',
		text: 'cjoecker',
		href: 'https://github.com/cjoecker',
		image: GithubIcon,
	},
];
