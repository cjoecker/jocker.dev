import EmailIcon from '../images/email.svg';
import GithubIcon from '../images/github.svg';
import LinkedinIcon from '../images/linkedin.svg';
import TwitterIcon from '../images/twitter.svg';

export type ContactInformationType = {
	icon: string;
	text: string;
	href: string;
	image: string;
};
export const ContactInformation: ContactInformationType[] = [
	{
		icon: 'email',
		text: 'test@email.com',
		href: 'mailto:test@email.com',
		image: EmailIcon,
	},
	{
		icon: 'linkedin',
		text: 'christianjoecker',
		href: 'https://www.linkedin.com/in/christianjoecker/',
		image: LinkedinIcon,
	},
	{
		icon: 'twitter',
		text: '@JockerDev',
		href: 'https://twitter.com/JockerDev',
		image: TwitterIcon,
	},
	{
		icon: 'github',
		text: 'cjoecker',
		href: 'https://github.com/cjoecker',
		image: GithubIcon,
	},
];
