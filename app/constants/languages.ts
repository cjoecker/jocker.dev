import FeijoadaIcon from '../images/feijoada.svg';
import HamburguerIcon from '../images/hamburguer.svg';
import PaellaIcon from '../images/paella.svg';
import PretzelIcon from '../images/pretzel.svg';

export const LanguagesData: LanguagesType[] = [
	{
		language: 'English',
		level: 'Fluent',
		icon: HamburguerIcon,
	},
	{
		language: 'German',
		level: 'Fluent',
		icon: PretzelIcon,
	},
	{
		language: 'Spanish',
		level: 'Fluent',
		icon: PaellaIcon,
	},
	{
		language: 'Portuguese',
		level: 'Good command',
		icon: FeijoadaIcon,
	},
];

export type LanguagesType = {
	language: string;
	level: string;
	icon: string;
};
