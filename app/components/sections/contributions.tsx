import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MeshPurple from "../../images/mesh-purple.svg";
import StackOverflowLogo from "../../images/stack-overflow.svg";
import { Section } from "../shared/section";

import { ExternalRedirect } from "~/components/shared/external-redirect";
import ThreePointEstimatorIcon from "~/images/3-point-estimator.svg";
import CoreValuesFinderIcon from "~/images/core-values-finder.svg";
import CurriculumGeneratorIcon from "~/images/curriculum-generator.svg";
import DcideIcon from "~/images/d-cide.svg";
import FramerMotionIcon from "~/images/framer-motion.svg";
import MuiIcon from "~/images/mui.svg";

export const StackOverflowDefaults: StackOverflowDefaultsType = {
	reputation: 4453,
	goldBadge: 1,
	silverBadge: 34,
	bronzeBadge: 40,
	profileUrl: "https://stackoverflow.com/users/4934446",
};
export const OpenSourceContributions: OpenSourceContributionsType[] = [
	{
		name: "MUI (Material-UI)",
		link: "https://mui.com/",
		icon: MuiIcon,
	},
	{
		name: "Framer Motion",
		link: "https://www.framer.com/motion/",
		icon: FramerMotionIcon,
	},
];
export const OwnApps: OwnAppsType[] = [
	{
		name: "d-cide",
		link: "https://d-cide.me/",
		icon: DcideIcon,
	},
	{
		name: "Core Values Finder",
		link: "https://cjoecker.github.io/core-values-finder/",
		icon: CoreValuesFinderIcon,
	},
	{
		name: "3 Point Estimator",
		link: "https://cjoecker.github.io/3-point-estimator/",
		icon: ThreePointEstimatorIcon,
	},
	{
		name: "Curriculum Generator",
		link: "https://github.com/cjoecker/curriculum-generator",
		icon: CurriculumGeneratorIcon,
	},
];

export interface StackOverflowDefaultsType {
	reputation: number;
	goldBadge: number;
	silverBadge: number;
	bronzeBadge: number;
	profileUrl: string;
}

export interface OwnAppsType {
	name: string;
	link: string;
	icon: string;
}

export interface OpenSourceContributionsType {
	name: string;
	link: string;
	icon: string;
}

export const Contributions = () => {
	return (
		<Section titleKey="contributions">
			<div className="flex">
				<div className="mx-auto flex flex-wrap justify-center gap-x-24 gap-y-36">
					<div className="relative flex min-w-[250px] flex-col">
						<Mesh />
						<MyApps />
					</div>
					<div className="relative flex min-w-[270px] flex-col">
						<Mesh />
						<OpenSource />
					</div>
					<div className="relative flex min-w-[200px] flex-col">
						<Mesh />
						<StackOverflow />
					</div>
				</div>
			</div>
		</Section>
	);
};

export const Mesh = () => {
	return (
		<img
			aria-hidden="true"
			alt=""
			height={800}
			width={600}
			className="absolute top-1/2 left-1/2 -z-10 h-[150%] min-h-[400px] w-[200%] min-w-[500px] -translate-x-1/2 -translate-y-1/2"
			src={MeshPurple}
		/>
	);
};

const StackOverflow = () => {
	const { t } = useTranslation();

	const [profilesData, setProfilesData] =
		useState<StackOverflowResponse | null>(null);
	const profile = profilesData?.items?.[0];

	useEffect(() => {
		try {
			void fetch(STACK_OVERFLOW_API)
				.then((res) => {
					if (!res.ok) {
						throw new Error("Network response was not ok");
					}
					return res.json();
				})
				.then((res) => {
					setProfilesData(res as never);
				});
		} catch (error) {
			console.error("Error fetching Stack Overflow data:", error);
		}
	}, []);
	return (
		<>
			<h3 className="mb-6 text-lg font-semibold">Stack Overflow</h3>
			<ExternalRedirect
				to={StackOverflowDefaults.profileUrl}
				className="mx-auto flex text-left"
			>
				<motion.div
					whileTap={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					variants={{
						visible: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
					viewport={{ amount: 0.9, once: true }}
					initial="hidden"
					whileInView="visible"
					aria-label={t("stackOverflowProfile")}
					className="border-secondary/10 from-neutral to-neutral-dark text-secondary mx-auto flex max-w-fit flex-col rounded-xl border-2 border-solid bg-linear-to-br px-4 py-2 hover:cursor-pointer"
				>
					<div className="flex">
						<img
							loading="lazy"
							className="my-auto mr-4"
							height="45"
							width="38"
							alt="stack overflow logo"
							src={StackOverflowLogo}
						/>
						<div>
							<div className="-mb-1.5 ml-1">Reputation</div>
							<div className="text-xl">
								{(
									profile?.reputation ?? StackOverflowDefaults.reputation
								).toLocaleString("en-US")}
							</div>
						</div>
					</div>
					<div className="mt-1.5 flex w-full justify-between">
						<Badge
							color="#D0A600"
							number={
								profile?.badge_counts.gold ?? StackOverflowDefaults.goldBadge
							}
						/>
						<Badge
							color="#707A81"
							number={
								profile?.badge_counts.silver ??
								StackOverflowDefaults.silverBadge
							}
						/>
						<Badge
							color="#986400"
							number={
								profile?.badge_counts.bronze ??
								StackOverflowDefaults.bronzeBadge
							}
						/>
					</div>
				</motion.div>
			</ExternalRedirect>
		</>
	);
};

const Badge = ({ color, number }: { color: string; number: number }) => {
	return (
		<div className="flex">
			<div
				className="my-auto h-2 w-2 rounded-full"
				style={{ backgroundColor: color }}
			/>
			<span className="text-md mb-1 ml-2">{number}</span>
		</div>
	);
};

const OpenSource = () => {
	const { t } = useTranslation();
	return (
		<>
			<h3 className="mb-6 text-lg font-semibold">
				{t("openSourceContributions")}
			</h3>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.9, once: true }}
				transition={{
					staggerChildren: 0.3,
				}}
				className="mx-auto flex flex-col gap-12"
			>
				{OpenSourceContributions.map((contribution) => {
					return (
						<ExternalRedirect key={contribution.name} to={contribution.link}>
							<motion.div
								whileTap={{ scale: 1 }}
								whileHover={{ scale: 1.1 }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
								className="hover:cursor-pointer"
								aria-label={`${contribution.name} ${t("website")}`}
							>
								<img
									loading="lazy"
									alt={`${contribution.name} logo`}
									width="50"
									height="50"
									className="mx-auto max-h-[60px] w-auto"
									src={contribution.icon}
								/>
								<div className="text-md text-secondary">
									{contribution.name}
								</div>
							</motion.div>
						</ExternalRedirect>
					);
				})}
			</motion.div>
		</>
	);
};

const MyApps = () => {
	const { t } = useTranslation();
	return (
		<>
			<h3 className="mb-8 text-lg font-semibold">{t("myApps")}</h3>
			<div className="flex">
				<motion.div
					className="m-auto grid grid-cols-2 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					transition={{
						staggerChildren: 0.3,
					}}
				>
					{OwnApps.map((app) => {
						return (
							<motion.div
								className="col-span-1 flex flex-col"
								key={app.name}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
							>
								<ExternalRedirect
									className="hover:cursor-pointer"
									to={app.link}
								>
									<motion.div
										whileTap={{ scale: 1 }}
										whileHover={{ scale: 1.1 }}
										className="mx-auto mb-2 h-16 w-16 rounded-xl"
									>
										<motion.img
											loading="lazy"
											alt={`${app.name} logo`}
											className="h-full w-full rounded-xl"
											src={app.icon}
										/>
									</motion.div>
									<div className="max-w-[100px]">{app.name}</div>
								</ExternalRedirect>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</>
	);
};

const STACK_OVERFLOW_API =
	"https://api.stackexchange.com/2.3/users/4934446?order=desc&sort=reputation&site=stackoverflow";

export interface StackOverflowResponse {
	items?: Item[];
	has_more?: boolean;
	quota_max?: number;
	quota_remaining?: number;
}

export interface Item {
	badge_counts: BadgeCounts;
	account_id: number;
	is_employee: boolean;
	last_modified_date: number;
	last_access_date: number;
	reputation_change_year: number;
	reputation_change_quarter: number;
	reputation_change_month: number;
	reputation_change_week: number;
	reputation_change_day: number;
	reputation: number;
	creation_date: number;
	user_type: string;
	user_id: number;
	location: string;
	website_url: string;
	link: string;
	profile_image: string;
	display_name: string;
}

export interface BadgeCounts {
	bronze: number;
	silver: number;
	gold: number;
}
