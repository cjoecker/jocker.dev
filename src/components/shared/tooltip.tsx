import { PopperUnstyled } from '@mui/base';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cloneElement, useRef, useState } from 'react';

export type Props = {
  text: string;
  children: ReactNode;
};
export const Tooltip = ({ children, text }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  return (
    <>
      {cloneElement(<div>{children}</div>, {
        ref: elementRef,
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
      })}
      <AnimatePresence>
        {isVisible && (
          <PopperUnstyled
            id="tootlip-popper"
            open={true}
            anchorEl={elementRef.current}
            placement="top"
            disablePortal={true}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.2 }}
              className={`w-full rounded-xl max-w-[150px] shadow-md m-3 bg-neutral px-3 py-2`}
            >
              {text}
            </motion.div>
          </PopperUnstyled>
        )}
      </AnimatePresence>
    </>
  );
};
