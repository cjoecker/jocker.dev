import { AnimatePresence, motion } from 'framer-motion';
import type { ChangeEvent, MouseEvent } from 'react';
import React, { useEffect, useState } from 'react';

import type { ContactInformationType } from '../../constants/contact-information';
import { ContactInformation } from '../../constants/contact-information';
import { Section } from '../shared/section';

import { ExternalRedirect } from '~/components/shared/external-redirect';
import CloseIcon from '~/images/x.svg';

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
				className="flex gap-9 flex-wrap mx-auto justify-center"
			>
				<div className="flex gap-9 flex-wrap justify-center">
					<ContactButton contactInformation={ContactInformation[0]} />
					<ContactButton contactInformation={ContactInformation[1]} />
				</div>
				<div className="flex gap-9 flex-wrap justify-center">
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
	const [isContactFormVisible, setIsContactFormVisible] = useState(true);
	const isContactFormButton = contactInformation.alt === 'email';

	const ButtonContent = () => {
		return (
			<motion.div
				style={{ boxShadow: '0px 0px 40px -8px #00DFD866' }}
				aria-label={contactInformation.text}
				whileTap={{ scale: 1 }}
				whileHover={{ scale: 1.2 }}
				className={
					'p-0.5 h-20 w-20 flex rounded-full hover:cursor-pointer select-none bg-gradient-to-br from-turquoise to-blue'
				}
			>
				<div className="flex w-full h-full rounded-full bg-[#000] bg-opacity-80 pointer-events-none">
					<div className="h-full w-full mx-4">
						<img
							loading="lazy"
							width="38.5"
							height="38.5"
							alt={contactInformation.alt}
							src={contactInformation.image}
							className="w-full h-full select-none pointer-events-none object-contain"
						/>
					</div>
				</div>
			</motion.div>
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
				{isContactFormButton ? (
					<button onClick={() => setIsContactFormVisible(true)}>
						<ButtonContent />
					</button>
				) : (
					<ExternalRedirect to={contactInformation.href}>
						<ButtonContent />
					</ExternalRedirect>
				)}
			</motion.div>
			<AnimatePresence>
				{isContactFormButton && isContactFormVisible && (
					<ContactForm onClose={() => setIsContactFormVisible(false)} />
				)}
			</AnimatePresence>
		</>
	);
};

export const ContactForm = ({ onClose }: { onClose: VoidFunction }) => {
	const [error, setError] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);

	useEffect(() => {
		if (name === '' || email === '' || message === '') {
			setError('Please fill out all fields');
		} else if (email.match(/^\S+@\S+\.\S+$/) === null) {
			setError('Please enter a valid email');
		} else {
			setError('');
		}
	}, [name, email, message]);

	const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
		setHasTriedToSubmit(true);
		if (error !== '') {
			event.preventDefault();
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			role="presentation"
			className="h-screen w-screen bg-neutral-dark/80 fixed top-0 left-0 flex z-40"
			onClick={onClose}
		>
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0, opacity: 0 }}
				transition={{ duration: 0.2 }}
				onClick={e => e.stopPropagation()}
				role="dialog"
				className="relative m-auto rounded-2xl bg-gradient-to-br from-neutral to-neutral-dark border-solid border-secondary/10 border-2 p-6 max-w-7xl shadow-sm-purple"
			>
				<motion.button
					whileTap={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					onClick={onClose}
					aria-label="close"
					className="absolute top-1 right-1 p-3"
				>
					<img src={CloseIcon} alt="" width={15} height={15} />
				</motion.button>
				<form
					className="text-left flex flex-col gap-5"
					name="contact"
					method="POST"
					data-netlify="true"
				>
					<input type="hidden" name="subject" value="Contact Form" />
					<Textbox
						label="Full Name"
						type="text"
						name="name"
						onChange={e => setName(e.target.value)}
					/>
					<Textbox
						label="Email"
						type="email"
						name="email"
						onChange={e => setEmail(e.target.value)}
					/>
					<label className="flex flex-col w-[400px]">
						Message
						<textarea
							onChange={e => setMessage(e.target.value)}
							className="p-2 mt-2 h-36 rounded-lg focus:filter-none resize-none leading-normal"
							name="message"
						></textarea>
					</label>
					<AnimatePresence>
						{error && hasTriedToSubmit && (
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 20, opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="text-primary"
							>
								{error}
							</motion.div>
						)}
					</AnimatePresence>
					<div className="flex mt-2">
						<motion.button
							type="submit"
							onClick={onSubmit}
							style={{ boxShadow: '0px 0px 30px -10px #00DFD866' }}
							whileTap={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							className="ml-auto rounded-md font-semibold hover:cursor-pointer select-none text-secondary bg-gradient-to-br from-turquoise to-blue"
						>
							<div className="flex py-3 px-4 m-[1px] bg-neutral-dark rounded-md bg-[#000] bg-opacity-80 pointer-events-none">
								Send Message
							</div>
						</motion.button>
					</div>
				</form>
			</motion.div>
		</motion.div>
	);
};

export type Props = {
	label: string;
	type: string;
	name: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Textbox = ({ label, type, name, onChange }: Props) => {
	return (
		<label className="flex flex-col">
			{label}
			<input
				onChange={onChange}
				className="p-2 rounded-lg mt-2 bg-[#3b3b3b] focus:bg-[#3b3b3b] focus:text-secondary focus:filter-none max-w-[300px]"
				type={type}
				name={name}
			/>
		</label>
	);
};
