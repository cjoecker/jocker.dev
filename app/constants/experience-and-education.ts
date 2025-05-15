import KukaLogo from "../images/kuka.svg";
import MaibornWolffLogo from "../images/maibornwolff.svg";
import MeWithMacbookImg from "../images/me-with-macbook.webp";
import ScmtLogo from "../images/scmt.svg";
import ThWildauLogo from "../images/th-wildau.svg";
export const EXPERIENCE_YEARS =
	new Date().getFullYear() - new Date("2015-02").getFullYear();

export const education: ExperiencAndEductionType[] = [
	{
		logo: ThWildauLogo,
		logoHeight: 55,
		link: "https://www.th-wildau.de",
		titleKey: "mechanicalEngineering",
		locationKey: "wildauGermany",
		startDate: new Date("2011-09"),
		endDate: new Date("2014-08"),
		type: "education",
	},
	{
		logo: ScmtLogo,
		logoHeight: 60,
		link: "https://www.scmt.com/home.html",
		titleKey: "masterBusinessEngineering",
		locationKey: "filderstadtGermany",
		startDate: new Date("2016-02"),
		endDate: new Date("2018-04"),
		type: "education",
	},
];

export const WorkExperienceData: ExperiencAndEductionType[] = [
	{
		logo: KukaLogo,
		logoHeight: 20,
		link: "https://www.kuka.com",
		titleKey: "kukaSoftwareEngineer",
		startDate: new Date("2015-02"),
		endDate: new Date("2018-04"),
		locationKey: "augsburgGermany",
		type: "work",
	},
	{
		logo: KukaLogo,
		logoHeight: 20,
		link: "https://www.kuka.com",
		titleKey: "kukaAreaManager",
		startDate: new Date("2018-04"),
		endDate: new Date("2019-05"),
		locationKey: "augsburgGermany",
		type: "work",
	},
	{
		logo: MaibornWolffLogo,
		logoHeight: 50,
		link: "https://www.maibornwolff.de",
		titleKey: "seniorSoftwareEngineer",
		startDate: new Date("2019-05"),
		endDate: new Date("2023-02"),
		locationKey: "munichGermany",
		type: "work",
	},
	{
		logo: MeWithMacbookImg,
		logoHeight: 50,
		link: "https://www.linkedin.com/in/christianjoecker",
		titleKey: "freelanceDeveloper",
		startDate: new Date("2023-02"),
		endDate: "today",
		locationKey: "valenciaSpain",
		type: "work",
	},
];

export interface ExperiencAndEductionType {
	logo: string;
	logoHeight: number;
	link: string;
	titleKey: string;
	locationKey: string;
	startDate: Date;
	endDate: Date | "today";
	type: "education" | "work";
}
