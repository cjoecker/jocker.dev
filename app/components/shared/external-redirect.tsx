export const ExternalRedirect = ({
	children,
	className,
	to,
}: {
	children: React.ReactNode;
	className?: string;
	to: string;
}) => {
	return (
		<a
			href={to}
			target="_blank"
			onClick={(e) => {
				(e.target as HTMLLinkElement).blur();
				e.stopPropagation();
			}}
			className={`cursor-pointer ${className}`}
			rel="noreferrer"
		>
			{children}
		</a>
	);
};
