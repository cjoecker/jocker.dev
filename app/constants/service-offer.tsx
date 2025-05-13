import ArtistImg from "../images/artist.svg";
import FaceWithSunglassesImg from "../images/face-with-sunglasses.svg";
import RobotImg from "../images/robot.svg";
import RocketImg from "../images/rocket.svg";
import StrategyImg from "../images/strategy.svg";

import { TranslationKey } from "~/middleware/i18next";

export const ServiceOfferData: ServiceOfferType[] = [
	{
		logo: FaceWithSunglassesImg,
		titleKey: "webApplicationsTitle",
		descriptionTranslationKey: "getReadyForPlatform",
	},
	{
		logo: ArtistImg,
		titleKey: "uxUiDesignTitle",
		descriptionTranslationKey: "turnDigitalDreams",
	},
	{
		logo: RobotImg,
		titleKey: "iotPlatformsTitle",
		descriptionTranslationKey: "stepIntoFuture",
	},
	{
		logo: RocketImg,
		titleKey: "lowCodeAppsTitle",
		descriptionTranslationKey: "whyReinventWheel",
	},
	{
		logo: StrategyImg,
		titleKey: "digitalStrategyTitle",
		descriptionTranslationKey: "withYearsExperience",
	},
];

export interface ServiceOfferType {
	logo: string;
	titleKey: TranslationKey;
	descriptionTranslationKey: TranslationKey;
}
