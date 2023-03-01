import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import {
	OpenSourceContributions,
	OwnApps,
	StackOverflowDefaults,
} from '../../constants/contributions';
import MeshPurple from '../../images/mesh-purple.svg';
import StackOverflowLogo from '../../images/stack-overflow.svg';
import { Section } from '../shared/section';
import { Tooltip } from '../shared/tooltip';
import {ExternalRedirect} from "~/components/shared/external-redirect";

export const Contributions = () => {
	return (
		<Section title="Community Contributions">
			<div className="flex">
				<div className="flex flex-wrap gap-x-24 justify-center gap-y-36 mx-auto">
					<div className="flex relative flex-col min-w-[250px]">
						<Mesh />
						<MyApps />
					</div>
					<div className="flex relative flex-col min-w-[270px]">
						<Mesh />
						<OpenSource />
					</div>
					<div className="flex relative flex-col min-w-[200px]">
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
			className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[200%] h-[150%]"
			src={MeshPurple}
		/>
	);
};

const StackOverflow = () => {
	const [profilesData, setProfilesData] =
		useState<StackOverflowResponse | null>(null);
	const profile = profilesData?.items?.[0];

	useEffect(() => {
		fetch(STACK_OVERFLOW_API)
			.then(res => res.json())
			.then(res => setProfilesData(res));
	}, []);
	return (
		<>
			<h3 className="text-lg mb-6 font-semibold">Stack Overflow</h3>
			<ExternalRedirect
				to={StackOverflowDefaults.profileUrl}
				className="flex text-left"
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
					aria-label="stack overflow profile"
					className="flex flex-col max-w-fit bg-gradient-to-br from-neutral to-neutral-dark border-solid border-secondary/10 border-2 py-2 px-4 rounded-xl hover:cursor-pointer mx-auto text-secondary"
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
								).toLocaleString('en-US')}
							</div>
						</div>
					</div>
					<div className="flex w-full w-full mt-1.5 justify-between">
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
		<div className="flex ">
			<div
				className="h-2 w-2 rounded-full my-auto"
				style={{ backgroundColor: color }}
			/>
			<span className="ml-2 text-md mb-1">{number}</span>
		</div>
	);
};

const OpenSource = () => {
	return (
		<>
			<h3 className="text-lg mb-6 font-semibold">Open Source Contributions</h3>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.9, once: true }}
				transition={{
					staggerChildren: 0.3,
				}}
				className="flex flex-col gap-12 mx-auto"
			>
				{OpenSourceContributions.map(contribution => {
					return (
						<ExternalRedirect
							key={contribution.name}
							to={contribution.link}
						>
							<motion.div
								whileTap={{ scale: 1 }}
								whileHover={{ scale: 1.1 }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
								className="hover:cursor-pointer"
								aria-label={`${contribution.name} website`}
							>
								<img
									loading="lazy"
									alt={`${contribution.name} logo`}
									width="50"
									height="50"
									className="max-h-[60px] w-auto mx-auto"
									src={contribution.icon}
								/>
								<div className="text-md text-secondary">{contribution.name}</div>
							</motion.div>
						</ExternalRedirect>
					);
				})}
			</motion.div>
		</>
	);
};

const MyApps = () => {
	return (
		<>
			<h3 className="text-lg mb-8 font-semibold">My Apps</h3>
			<div className="flex">
				<motion.div
					className="grid grid-cols-2 m-auto gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					transition={{
						staggerChildren: 0.3,
					}}
				>
					{OwnApps.map(app => {
						return (
							<motion.div
								className="col-span-1 flex flex-col"
								key={app.name}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
							>
								<Tooltip text={app.description}>
									<ExternalRedirect
										className="hover:cursor-pointer"
										to={app.link}
									>
										<motion.div
											whileTap={{ scale: 1 }}
											whileHover={{ scale: 1.1 }}
											className="w-16 h-16 rounded-xl mx-auto mb-2"
											style={{
												backgroundImage: `url(${app.icon})`,
											}}
										/>
										<div className="max-w-[100px]">{app.name}</div>
									</ExternalRedirect>
								</Tooltip>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</>
	);
};

const STACK_OVERFLOW_API =
	'https://api.stackexchange.com/2.3/users/4934446?order=desc&sort=reputation&site=stackoverflow';

export interface StackOverflowResponse {
	items: Item[];
	has_more: boolean;
	quota_max: number;
	quota_remaining: number;
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
