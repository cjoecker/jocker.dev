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
			className={className}
			rel="noreferrer"
		>
			<div className="pointer-events-none">{children}</div>
		</a>
	);
};
