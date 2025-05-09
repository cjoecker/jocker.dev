import { motion } from "framer-motion";
import React from "react";

export interface ContactFormAlertProps {
	type: "success" | "error";
	personalEmail: string;
}

export const ContactFormAlert = ({
	type,
	personalEmail,
}: ContactFormAlertProps) => {
	const ErrorMessage = () => {
		return type === "success" ? (
			<>
				<span className="font-bold">Message Sent!</span>&ensp;I&#39;ll get back
				to you within <span className="font-bold">one day</span>.
			</>
		) : (
			<>
				Server error!&ensp;Your message could not be sent. Please send me an
				email to&nbsp;
				<a
					className="text-primary font-bold underline"
					href={`mailto:${personalEmail}`}
				>
					{personalEmail}
				</a>
			</>
		);
	};
	return (
		<motion.div
			className="fixed bottom-0 left-0 z-50 mb-4 flex w-full px-2"
			initial={{ y: 100 }}
			animate={{ y: 0 }}
			exit={{ y: 100 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className="shadow-sm-turquoise border-secondary/10 bg-neutral-dark mx-auto rounded-xl border-2 border-solid p-6">
				<ErrorMessage />
			</div>
		</motion.div>
	);
};
