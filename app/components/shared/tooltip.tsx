
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cloneElement, useRef, useState } from 'react';
import { Popper } from '@mui/base';


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
					<Popper
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
							className={`m-3 w-full max-w-[200px] rounded-xl bg-neutral px-3 py-2 shadow-md`}
						>
							{text}
						</motion.div>
					</Popper>
				)}
			</AnimatePresence>
		</>
	);
};
