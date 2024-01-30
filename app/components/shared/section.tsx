export type Props = {
	title?: string;
	children: React.ReactNode;
	className?: string;
};
export const Section = ({ title, children, className }: Props) => {
	return (
		<section className={`mx-4 mb-8 max-w-[100vw] last:mb-12 ${className}`}>
			{title && <h2 className="mb-4 text-xl font-bold mt-12 pt-4">{title}</h2>}

			{children}
		</section>
	);
};
