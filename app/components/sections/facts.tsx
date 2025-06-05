import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import HappyIcon from "../../images/happy.svg";
import MeshPurple from "../../images/mesh-purple.svg";
import SmartphoneIcon from "../../images/smartphone.svg";
import StrongIcon from "../../images/strong.svg";
import { Section } from "../shared/section";

import { EXPERIENCE_YEARS } from "~/components/sections/experience-and-education";

export const Facts = () => {
	const { t } = useTranslation();
	return (
		<Section titleKey="facts">
			<div className="relative mt-12 flex">
				<div className="mx-auto grid grid-cols-1 flex-wrap justify-between gap-x-12 gap-y-8 lg:grid-cols-3">
					<Fact
						number={EXPERIENCE_YEARS}
						label={t("yearsOfExperience")}
						icon={StrongIcon}
						alt="strong"
					/>
					<Fact
						number={23}
						label={t("developedApps")}
						icon={SmartphoneIcon}
						alt="smartphone"
					/>
					<Fact
						number={27}
						label={t("happyCustomers")}
						icon={HappyIcon}
						alt="happy face"
					/>
				</div>
			</div>
		</Section>
	);
};

const Fact = ({
	number,
	label,
	icon,
	alt,
}: {
	number: number;
	label: string;
	icon: string;
	alt: string;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const content = useTransform(scrollYProgress, [0.9, 0.6], [0, number + 1]);

	useEffect(() => {
		if (ref.current) {
			ref.current.textContent = "0";
		}
		content.on("change", (val) => {
			if (!ref.current) {
				return;
			}
			if (val >= number) {
				ref.current.textContent = `${number}+`;
			} else {
				ref.current.textContent = val.toFixed(0);
			}
		});
		return () => {
			content.destroy();
		};
	}, [content, number]);

	return (
		<div className="relative col-span-1 flex min-w-[220px] flex-col rounded-lg p-4">
			<img
				aria-hidden="true"
				alt=""
				height={800}
				width={600}
				className="absolute top-1/2 left-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
				src={MeshPurple}
			/>
			<motion.img
				loading="lazy"
				className="mx-auto"
				alt={alt}
				width="150"
				height="150"
				src={icon}
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.9, once: true }}
				transition={{ duration: 0.7 }}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 100 },
				}}
			/>
			<div ref={ref} className="mt-3 text-2xl font-semibold" />
			<div className="mt-4 text-xl">{label}</div>
		</div>
	);
};
