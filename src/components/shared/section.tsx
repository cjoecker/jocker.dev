export type Props = {
  title?: string;
  children: React.ReactNode;
};
export const Section = ({ title, children }: Props) => {
  return (
    <section className="mb-[30vh] last:mb-12">
      {title && (
        <h2 className="text-primary text-4xl font-normal mb-12">{title}</h2>
      )}

      {children}
    </section>
  );
};
