import { motion } from "framer-motion";
import React from "react";

export interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children?: React.ReactNode;
	iconButton?: boolean;
	ariaLabel?: string;
}
export const Button = ({
	onClick,
	children,
	iconButton,
	ariaLabel,
}: ButtonProps) => {
	return (
		<div className="grow-0">
			<motion.button
				aria-label={ariaLabel}
				onClick={onClick}
				style={{ boxShadow: "0px 0px 30px -10px #00DFD866" }}
				whileTap={{ scale: 1 }}
				whileHover={{ scale: 1.05 }}
				className={`from-turquoise to-blue text-secondary ml-auto flex items-center bg-linear-to-br p-[2px] align-middle font-semibold select-none hover:cursor-pointer ${iconButton ? "h-20 w-20 rounded-full" : "rounded-md"}`}
			>
				<div
					className={`bg-neutral-dark/80 flex h-full w-full px-4 py-3 ${iconButton ? "rounded-full" : "rounded-md"}`}
				>
					{children}
				</div>
			</motion.button>
		</div>
	);
};

export interface ButtonIconProps {
	alt: string;
	src: string;
}
export const ButtonIcon = ({ alt, src }: ButtonIconProps) => {
	return (
		<img
			loading="lazy"
			width="38.5"
			height="38.5"
			alt={alt}
			src={src}
			className="pointer-events-none h-full w-full object-contain select-none"
		/>
	);
};
