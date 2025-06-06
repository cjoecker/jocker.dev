import { AnimatePresence, motion } from "framer-motion";
import posthog from "posthog-js";
import React, { useRef, useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import {
	ActionFunctionArgs,
	Form,
	useActionData,
	useNavigate,
	useSubmit,
} from "react-router";

import { Button } from "~/components/shared/button";
import { Lottie } from "~/components/shared/lottie";
import { useEffectUnsafe } from "~/hooks/unsafe-hookst";
import AnimatedCheck from "~/images/animated-check.json";
import AnimatedX from "~/images/animated-x.json";
import CloseIcon from "~/images/x.svg";

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	const formParams = new URLSearchParams();
	formParams.append("name", formData.get("name") as string);
	formParams.append("email", formData.get("email") as string);
	formParams.append("message", formData.get("message") as string);
	formParams.append("form-name", "contact");

	const url = new URL(request.url);
	const baseUrl = url.origin;
	try {
		const response = await fetch(`${baseUrl}/form.html`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: formParams.toString(),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
	} catch (error) {
		console.error("Error sending form data:", error);
		return { success: false, personalEmail: process.env.PERSONAL_EMAIL };
	}

	return { success: true };
}

const ERROR_ANIMATION_DURATION = 0.5;
export default function Contact() {
	const data = useActionData<typeof action>();
	const submitSuccess = data?.success;
	const navigate = useNavigate();
	const formRef = useRef<HTMLFormElement>(null);
	const { t } = useTranslation();

	const captureFormData = () => {
		const formElements = formRef.current?.elements;
		const name = formElements?.namedItem("name") as
			| HTMLInputElement
			| undefined;
		const email = formElements?.namedItem("email") as
			| HTMLInputElement
			| undefined;
		const message = formElements?.namedItem("message") as
			| HTMLInputElement
			| undefined;

		if (name?.value || (email?.value && message?.value)) {
			posthog.capture("contact_form_close", {
				name: name?.value ?? "",
				email: email?.value ?? "",
				message: message?.value ?? "",
			});
		}
	};

	useEffectUnsafe(() => {
		const handleBeforeUnload = () => {
			captureFormData();
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	const handleClose = () => {
		captureFormData();
		void navigate("/", { preventScrollReset: true });
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				role="presentation"
				className="bg-neutral-dark/80 pointer-events-none fixed top-0 left-0 z-40 h-screen w-screen overscroll-contain"
			></motion.div>
			<div
				aria-hidden="true"
				onClick={submitSuccess === undefined ? undefined : handleClose}
				className="fixed top-0 left-0 z-50 flex h-dvh w-screen overscroll-contain"
			>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.2 }}
					tabIndex={-1}
					onClick={(event) => {
						event.stopPropagation();
					}}
					className="shadow-sm-purple border-secondary/10 from-neutral/50 to-neutral-dark relative/50 mx-4 my-auto w-full max-w-7xl rounded-2xl border-2 border-solid bg-linear-to-br p-6 backdrop-blur sm:m-auto sm:w-fit"
				>
					<motion.button
						whileTap={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						onClick={handleClose}
						aria-label={t("close")}
						className="absolute top-1 right-1 cursor-pointer p-3"
					>
						<img src={CloseIcon} alt="" width={15} height={15} />
					</motion.button>
					{submitSuccess !== undefined &&
						(submitSuccess ? (
							<SubmitSuccess />
						) : (
							<SubmitError personalEmail={data?.personalEmail ?? ""} />
						))}
					{submitSuccess === undefined && <ContactForm formRef={formRef} />}
				</motion.div>
			</div>
		</>
	);
}

export interface ContactFormProps {
	formRef: React.RefObject<HTMLFormElement | null>;
}
export const ContactForm = ({ formRef }: ContactFormProps) => {
	const { t } = useTranslation();
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);
	const submit = useSubmit();

	const validateForm = () => {
		if (name === "" || email === "" || message === "") {
			setError(t("pleaseFillFields"));
			return true;
		} else if (/^\S+@\S+\.\S+$/.exec(email) === null) {
			setError(t("invalidEmail"));
			return true;
		}
		setError("");
		return false;
	};

	const onSendClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setHasTriedToSubmit(true);
		const hasError = validateForm();
		if (!hasError) {
			posthog.capture("contact_form_submit", {
				name: name,
				email: email,
				message: message,
			});
			void submit(formRef.current);
		}
	};

	return (
		<Form
			ref={formRef}
			className="flex flex-col gap-5 text-left sm:w-fit"
			method="post"
			noValidate
			onChange={() => {
				validateForm();
			}}
		>
			<Textbox
				label={t("fullName")}
				type="text"
				name="name"
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setName(e.target.value);
				}}
			/>
			<Textbox
				label={t("email")}
				type="email"
				name="email"
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setEmail(e.target.value);
				}}
			/>
			<label className="flex w-full flex-col sm:w-[400px]">
				{t("message")}
				<textarea
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="mt-2 h-36 resize-none rounded-lg bg-[#3b3b3b] p-2 leading-normal focus:bg-[#3b3b3b] focus:filter-none"
					name="message"
				></textarea>
			</label>

			<div className="mt-2 flex gap-2">
				<div className="flex-1">
					<AnimatePresence>
						{error !== "" && hasTriedToSubmit && (
							<motion.div
								layout
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 20, opacity: 0 }}
								transition={{ duration: ERROR_ANIMATION_DURATION }}
								className="text-primary max-w-[200px] wrap-break-word"
							>
								{error}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<Button onClick={onSendClick}>{t("sendMessage")}</Button>
			</div>
		</Form>
	);
};

export interface Props {
	label: string;
	type: string;
	name: string;
	ariaLabel?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Textbox = ({ label, type, name, ariaLabel, onChange }: Props) => {
	return (
		<label className="flex flex-col">
			{label}
			<input
				onKeyDown={(e) => {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					e.key === "Enter" && e.preventDefault();
				}}
				onChange={onChange}
				className="focus:text-secondary mt-2 max-w-[300px] rounded-lg bg-[#3b3b3b] p-2 focus:bg-[#3b3b3b] focus:filter-none"
				type={type}
				name={name}
				aria-label={ariaLabel}
			/>
		</label>
	);
};

export const SubmitSuccess = () => {
	const { t } = useTranslation();
	return (
		<div className="flex gap-4">
			<Lottie
				className="mt-1 h-16 w-16"
				animationData={AnimatedCheck}
				loop={false}
			/>
			<div className="m-auto flex flex-1 flex-col gap-2 text-left">
				<div className="text-green text-md font-bold">{t("messageSent")}</div>
				<div>
					{t("responseTime")} <span className="font-bold">{t("oneDay")}</span>.
				</div>
			</div>
		</div>
	);
};

export const SubmitError = ({ personalEmail }: { personalEmail: string }) => {
	const { t } = useTranslation();
	return (
		<div className="flex gap-4">
			<div className="-mt-2">
				<Lottie
					className="my-auto mt-1 h-16 w-16"
					animationData={AnimatedX}
					loop={false}
				/>
			</div>
			<div className="m-auto flex flex-1 flex-col gap-2 text-left">
				<div className="text-md font-bold text-[#FF6347]">{t("error")}</div>
				<div>
					{t("couldNotSend")}&nbsp;
					<a
						className="text-primary font-bold underline"
						href={`mailto:${personalEmail}`}
					>
						{personalEmail}
					</a>
				</div>
			</div>
		</div>
	);
};
