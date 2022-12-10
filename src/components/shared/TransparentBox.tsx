export type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};
export const TransparentBox = ({ children, className }: Props) => {
  return (
    <div
        className={`rounded-lg p-3 backdrop-blur bg-black bg-opacity-20 ${className}`}
    >
      {children}
    </div>
  );
};
