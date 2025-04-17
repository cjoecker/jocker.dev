import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import { Form } from "react-router";

import { ContactInformation } from "../../constants/contact-information";
import type { ContactInformationType } from "../../constants/contact-information";
import { Section } from "../shared/section";

import { ExternalRedirect } from "~/components/shared/external-redirect";
import CloseIcon from "~/images/x.svg";

export const Contact = () => {
	return (
		<Section title="Contact Me!">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.5, once: true }}
				transition={{
					staggerChildren: 0.1,
				}}
				className="mx-auto flex flex-wrap justify-center gap-9"
			>
				<div className="flex flex-wrap justify-center gap-9">
					<ContactButton contactInformation={ContactInformation[0]} />
					<ContactButton contactInformation={ContactInformation[1]} />
				</div>
				<div className="flex flex-wrap justify-center gap-9">
					<ContactButton contactInformation={ContactInformation[2]} />
					<ContactButton contactInformation={ContactInformation[3]} />
				</div>
			</motion.div>
		</Section>
	);
};

export const ContactButton = ({
	contactInformation,
}: {
	contactInformation: ContactInformationType;
}) => {
	const [isContactFormVisible, setIsContactFormVisible] = useState(false);
	const isContactFormButton = contactInformation.alt === "email";

	const ButtonContent = () => {
		return (
			<div
				style={{ boxShadow: "0px 0px 40px -8px #00DFD866" }}
				aria-label={contactInformation.text}
				className={
					"flex h-20 w-20 select-none rounded-full bg-linear-to-br from-turquoise to-blue p-0.5 hover:cursor-pointer"
				}
			>
				<div className="pointer-events-none flex h-full w-full rounded-full bg-neutral-dark/80">
					<div className="mx-4 h-full w-full">
						<img
							loading="lazy"
							width="38.5"
							height="38.5"
							alt={contactInformation.alt}
							src={contactInformation.image}
							className="pointer-events-none h-full w-full select-none object-contain"
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<motion.div
				key={contactInformation.text}
				variants={{
					visible: { scale: 1 },
					hidden: { scale: 0 },
				}}
			>
				<motion.div whileTap={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
					{isContactFormButton ? (
						<button onClick={() => { setIsContactFormVisible(true); }}>
							<ButtonContent />
						</button>
					) : (
						<ExternalRedirect to={contactInformation.href}>
							<ButtonContent />
						</ExternalRedirect>
					)}
				</motion.div>
			</motion.div>
			<AnimatePresence>
				{isContactFormButton && isContactFormVisible && (
					<ContactForm onClose={() => { setIsContactFormVisible(false); }} />
				)}
			</AnimatePresence>
		</>
	);
};

const ERROR_ANIMATION_DURATION = 0.5;
export const ContactForm = ({ onClose }: { onClose: VoidFunction }) => {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);
	const isAnimatingError = useRef(false);

	useEffect(() => {
		const animateErrorChange = (newError: string) => {
			if (error === newError || isAnimatingError.current) {
				return;
			}
			if (error === "") {
				setError(newError);
			} else {
				setError("");
				isAnimatingError.current = true;
				setTimeout(
					() => {
						isAnimatingError.current = false;
						setError(newError);
					},
					ERROR_ANIMATION_DURATION * 1000 * 2
				);
			}
		};

		if (name === "" || email === "" || message === "") {
			animateErrorChange("Please fill out all fields");
		} else if ((/^\S+@\S+\.\S+$/.exec(email)) === null) {
			animateErrorChange("Please enter a valid email");
		} else {
			setError("");
		}
	}, [name, email, message, error]);

	const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
		setHasTriedToSubmit(true);
		if (error === "") {
			onClose();
		} else {
			event.preventDefault();
		}
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				role="presentation"
				className="pointer-events-none fixed left-0 top-0 z-40 h-screen w-screen overscroll-contain bg-neutral-dark/80"
			></motion.div>
			<div
				aria-hidden="true"
				onClick={onClose}
				className="fixed left-0 top-0 z-50 flex h-screen w-screen overscroll-contain"
			>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.2 }}
					tabIndex={-1}
					onClick={event => { event.stopPropagation(); }}
					className="shadow-sm-purple relative mx-4 my-auto w-full max-w-7xl rounded-2xl border-2 border-solid border-secondary/10 bg-linear-to-br from-neutral to-neutral-dark p-6 sm:m-auto sm:w-fit"
				>
					<motion.button
						whileTap={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						onClick={onClose}
						aria-label="close"
						className="absolute right-1 top-1 p-3"
					>
						<img src={CloseIcon} alt="" width={15} height={15} />
					</motion.button>
					<Form
						className="flex flex-col gap-5 text-left sm:w-fit"
						method="post"
						action="/?index"
					>
						<input type="hidden" name="subject" value="Contact Form" />
						<Textbox
							label="Full Name"
							type="text"
							name="name"
							onChange={e => { setName(e.target.value); }}
						/>
						<Textbox
							label="Email"
							type="email"
							name="email"
							onChange={e => { setEmail(e.target.value); }}
						/>
						<label className="flex w-full flex-col sm:w-[400px]">
							Message
							<textarea
								onChange={e => { setMessage(e.target.value); }}
								className="mt-2 h-36 resize-none rounded-lg bg-[#3b3b3b] p-2 leading-normal focus:bg-[#3b3b3b] focus:filter-none"
								name="message"
							></textarea>
						</label>

						<div className="mt-2 flex">
							<div className="flex-1">
								<AnimatePresence>
									{error !== "" && hasTriedToSubmit && (
										<motion.div
											layout
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: 20, opacity: 0 }}
											transition={{ duration: ERROR_ANIMATION_DURATION }}
											className="text-primary"
										>
											{error}
										</motion.div>
									)}
								</AnimatePresence>
							</div>
							<div className="grow-0">
								<motion.button
									type="submit"
									onClick={onSubmit}
									style={{ boxShadow: "0px 0px 30px -10px #00DFD866" }}
									whileTap={{ scale: 1 }}
									whileHover={{ scale: 1.05 }}
									className="ml-auto select-none rounded-md bg-linear-to-br from-turquoise to-blue font-semibold text-secondary hover:cursor-pointer"
								>
									<div className="pointer-events-none m-[1px] flex rounded-md bg-neutral-dark/80 px-4 py-3">
										Send Message
									</div>
								</motion.button>
							</div>
						</div>
					</Form>
				</motion.div>
			</div>
		</>
	);
};

export interface Props {
	label: string;
	type: string;
	name: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Textbox = ({ label, type, name, onChange }: Props) => {
	return (
		<label className="flex flex-col">
			{label}
			<input
				onKeyDown={e => {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					e.key === "Enter" && e.preventDefault();
				}}
				onChange={onChange}
				className="mt-2 max-w-[300px] rounded-lg bg-[#3b3b3b] p-2 focus:bg-[#3b3b3b] focus:text-secondary focus:filter-none"
				type={type}
				name={name}
			/>
		</label>
	);
};

export interface ContactFormAlertProps {
	type: "success" | "error";
}
export const ContactFormAlert = ({ type }: ContactFormAlertProps) => {
	const ErrorMessage = () => {
		return type === "success" ? (
			<>
				<span className="font-bold">Message Sent!</span>&ensp;I&#39;ll get back to
				you within <span className="font-bold">one day</span>.
			</>
		) : (
			<>
				Server error!&ensp;Your message could not be sent. Please send me an
				email to&nbsp;
				<a
					className="font-bold text-primary underline"
					href="c.jocker@hotmail.com"
				>
					c.jocker@hotmail.com
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
			<div className="shadow-sm-turquoise mx-auto rounded-xl border-2 border-solid border-secondary/10 bg-neutral-dark p-6">
				<ErrorMessage />
			</div>
		</motion.div>
	);
};
