export type Props = {
  title?: string;
  children: React.ReactNode;
};
export const Section = ({ title, children }: Props) => {
  return (
    <section className="mb-36 last:mb-4">
      {title && (
        <h2 className="text-primary text-4xl font-normal mb-4">{title}</h2>
      )}
      {children}
    </section>
  );
};
