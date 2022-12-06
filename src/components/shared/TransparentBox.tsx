export type Props = {
  children: React.ReactNode | React.ReactNode[];
};
export const TransparentBox = ({children}: Props) => {
  return (
    <div className="rounded-lg p-3 backdrop-blur bg-white bg-opacity-5">
      {children}
    </div>
  );
};
