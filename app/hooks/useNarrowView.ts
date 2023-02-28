import { useLayoutEffect, useMemo, useState } from 'react';

const NARROW_WIDTH = 480;
export function useNarrowView() {
	const [width, setWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0
	);
	useLayoutEffect(() => {
		function handleResize() {
			if (typeof window !== 'undefined') {
				setWidth(window.innerWidth);
			}
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const isNarrowView = useMemo(() => width <= NARROW_WIDTH, [width]);
	return { isNarrowView };
}
