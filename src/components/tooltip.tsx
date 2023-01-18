import type { ReactNode } from 'react';
import { cloneElement, useEffect, useRef, useState } from 'react';
import { PopperUnstyled } from '@mui/base';
import { AnimatePresence, motion } from 'framer-motion';

export type Props = {
  text: string;
  children: ReactNode;
};
export const Tooltip = ({ children, text }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);


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
              className={`w-full rounded-xl max-w-[150px] shadow-md m-2 bg-light-grey px-2 py-1`}
            >
              {text}
            </motion.div>
          </PopperUnstyled>
        )}
      </AnimatePresence>
    </>
  );
};
