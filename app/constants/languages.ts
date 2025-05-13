import FeijoadaIcon from "../images/feijoada.svg";
import HamburguerIcon from "../images/hamburguer.svg";
import PaellaIcon from "../images/paella.svg";
import PretzelIcon from "../images/pretzel.svg";
import { TranslationKey } from "~/middleware/i18next";

export const LanguagesData: LanguagesType[] = [
	{
		languageKey: "english",
		levelKey: "fluent",
		icon: HamburguerIcon,
	},
	{
		languageKey: "german",
		levelKey: "fluent",
		icon: PretzelIcon,
	},
	{
		languageKey: "spanish",
		levelKey: "fluent",
		icon: PaellaIcon,
	},
	{
		languageKey: "portuguese",
		levelKey: "goodCommand",
		icon: FeijoadaIcon,
	},
];

export interface LanguagesType {
	languageKey: TranslationKey;
	levelKey: TranslationKey;
	icon: string;
}
