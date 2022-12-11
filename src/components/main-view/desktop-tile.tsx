import { motion, useDragControls } from 'framer-motion';
import { forwardRef, useState } from 'react';

import { postion } from '../../App';

import DragIcon from './images/drag-icon.svg';
import { useZIndex } from './z-index-context';

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  tileName?: string;
  position: postion | undefined;
};

export const DesktopTile = forwardRef<HTMLDivElement, Props>(
  ({ children, tileName, position }: Props, ref) => {
    const dragControls = useDragControls();
    const [isDragging, setIsDragging] = useState(false);
    const onStartDrag = (event: any) => {
      dragControls.start(event, { snapToCursor: false });
      setIsDragging(true);
    };
    const [zIndex, setZIndex] = useState(0);
    const { maxZIndex, updateMaxZIndex } = useZIndex();
    const onDragStart = () => {
      setZIndex(maxZIndex);
      updateMaxZIndex();
    };
    return (
      <motion.div
        className="absolute select-none flex flex-col pointer-events-none max-w-[500px]"
        style={{ left: `${position?.x}px`, top: `${position?.y}px`, zIndex }}
        ref={ref}
        drag
        onMouseDown={onDragStart}
        onDragEnd={() => setIsDragging(false)}
        onDragStart={() => setIsDragging(true)}
        dragMomentum={false}
        dragListener={!tileName}
        dragControls={dragControls}
      >
        {tileName && (
          <div
            onPointerDown={onStartDrag}
            className={`flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            <img
              className="my-auto pointer-events-auto w-[17px] h-[17px]"
              width={17}
              height={17}
              alt="drag icon"
              src={DragIcon}
              draggable="false"
            />
            <h3 className="my-1 text-base inline text-left relative select-none pr-5 pointer-events-auto font-light">
              {tileName}
            </h3>
          </div>
        )}
        <div
          className={`relative pointer-events-auto ${
            !tileName ? 'cursor-grab' : 'cursor-auto'
          }`}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);
