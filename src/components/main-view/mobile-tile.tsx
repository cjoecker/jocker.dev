

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  tileName?: string;
};

export const MobileTile = ({ children, tileName }: Props) => {
  return (
    <div className="flex justify-center flex-col p-2 mb-2">
      {tileName && (
        <div className="flex mb-1">
          <h3 className="select-none m-0 font-light">{tileName}</h3>
        </div>
      )}
      <div className="flex justify-center">{children}</div>
    </div>
  );
};
