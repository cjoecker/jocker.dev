import { motion } from "framer-motion";

import { AboutMeData } from "../../constants/about-me";
import ChristianImg from "../../images/christian.webp";
import Signature from "../../images/signature.svg";
import { Section } from "../shared/section";

export const AboutMe = () => {
	return (
		<Section>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.1, once: true }}
				transition={{ duration: 0.7 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className="mx-auto grid max-w-4xl grid-cols-1 gap-x-9 gap-y-6 overflow-hidden rounded-2xl p-6 sm:grid-cols-5"
			>
				<div className="col-span-1 sm:col-span-2">
					<img
						loading="lazy"
						className="shadow-lg-purple h-full w-full -rotate-2 rounded-2xl object-cover"
						height={512}
						width={384}
						alt="christian"
						src={ChristianImg}
					/>
				</div>
				<div className="col-span-1 my-auto text-left sm:col-span-3">
					<h3 className="mb-4 text-xl font-semibold">About me</h3>
					<div className="text-base">{AboutMeData}</div>
					<img
						loading="lazy"
						className="mt-4"
						height={50 * 0.8}
						width={280 * 0.8}
						alt="handwritten name"
						src={Signature}
					/>
				</div>
			</motion.div>
		</Section>
	);
};
