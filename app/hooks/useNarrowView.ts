import { useWindowSize } from 'react-use';

const NARROW_WIDTH = 480;
export function useNarrowView() {
	const { width } = useWindowSize();
	const isNarrowView = width <= NARROW_WIDTH;
	return { isNarrowView };
}
