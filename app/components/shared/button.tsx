import { motion } from "framer-motion";
import React from "react";

export interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	href?: string;
	children?: React.ReactNode;
	iconButton?: boolean;
	ariaLabel?: string;
	color?: "orange" | "blue";
}

export const Button = ({
	onClick,
	href,
	children,
	iconButton,
	ariaLabel,
	color = "blue",
}: ButtonProps) => {
	const ButtonElement = onClick ? motion.button : motion.a;
	if (href && onClick) {
		throw new Error("Button cannot have both onClick and href props.");
	}
	const gradientColor =
		color === "orange" ? "from-orange to-yellow" : "from-turquoise to-blue";
	return (
		<div className="grow-0">
			<ButtonElement
				aria-label={ariaLabel}
				onClick={onClick as never}
				href={href}
				target={href ? "_blank" : undefined}
				style={{ boxShadow: "0px 0px 30px -10px #00DFD866" }}
				whileTap={{ scale: 1 }}
				whileHover={{ scale: 1.05 }}
				className={`${gradientColor} text-secondary ml-auto flex items-center bg-linear-to-br p-[2px] align-middle font-semibold select-none hover:cursor-pointer ${iconButton ? "h-20 w-20 rounded-full" : "rounded-md"}`}
			>
				<div
					className={`bg-neutral-dark/80 flex h-full w-full px-4 py-3 ${iconButton ? "rounded-full" : "rounded-md"}`}
				>
					{children}
				</div>
			</ButtonElement>
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
