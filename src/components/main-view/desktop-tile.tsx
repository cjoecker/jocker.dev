import { motion, useDragControls } from 'framer-motion';
import { forwardRef, useState } from 'react';

import { postion } from '../../App';

import { useZIndex } from './z-index-context';

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  tileName?: string;
  position: postion | undefined;
};

export const DesktopTile = forwardRef<HTMLDivElement, Props>(
  ({ children, tileName, position }: Props, ref) => {
    const dragControls = useDragControls();
    const onStartDrag = (event: any) => {
      dragControls.start(event, { snapToCursor: false });
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
        dragMomentum={false}
        dragListener={!tileName}
        dragControls={dragControls}
      >
        {tileName && (
          <div className="flex">
            <h3
              onPointerDown={onStartDrag}
              className="inline text-left relative select-none pr-5 pointer-events-auto font-light"
            >
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
