import { useEffect, useMemo, useState } from "react";

const NARROW_WIDTH = 480;
export function useNarrowView() {
	const [width, setWidth] = useState(1000);
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const isNarrowView = useMemo(() => {
		return width <= NARROW_WIDTH;
	}, [width]);
	return { isNarrowView };
}
