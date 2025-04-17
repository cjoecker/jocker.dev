export interface Props {
	title?: string;
	children: React.ReactNode;
	className?: string;
}
export const Section = ({ title, children, className }: Props) => {
	return (
		<section className={`mx-4 mb-[30vh] max-w-[100vw] last:mb-12 ${className}`}>
			{title && <h2 className="mb-12 text-xl font-bold">{title}</h2>}

			{children}
		</section>
	);
};
