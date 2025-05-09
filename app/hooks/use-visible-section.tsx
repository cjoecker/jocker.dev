import { create } from "zustand";

interface VisibleSectionState {
	visibleSection: string;
	setVisibleSection: (section: string) => void;
}

const useVisibleSection = create<VisibleSectionState>((set) => {
	return {
		visibleSection: "",
		setVisibleSection: (section: string) => {
			set(() => {
				return { visibleSection: section };
			});
		},
	};
});

export default useVisibleSection;
