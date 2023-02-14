export type Props = {
  title?: string;
  children: React.ReactNode;
};
export const Section = ({ title, children }: Props) => {
  return (
    <section className="mb-[30vh] last:mb-12">
      {title && (
        <h2 className="text-xl mb-12">{title}</h2>
      )}

      {children}
    </section>
  );
};
