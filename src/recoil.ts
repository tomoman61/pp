import type { PopulationCategory, Prefecture } from "@/type";
import { atom } from "recoil";

export const prefecturesAtom = atom<Prefecture[]>({
	key: "prefectures",
	default: [],
});

export const populationAtom = atom<PopulationCategory>({
	key: "population",
	default: {
		total: [],
		young: [],
		workingAge: [],
		elderly: [],
	},
});
