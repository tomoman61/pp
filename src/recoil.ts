import type { PopulationCategoryAll, Prefecture } from "@/type";
import { atom } from "recoil";

export const prefecturesAtom = atom<Prefecture[]>({
	key: "prefectures",
	default: [],
});

export const populationAtom = atom<PopulationCategoryAll>({
	key: "population",
	default: {
		total: [],
		young: [],
		workingAge: [],
		elderly: [],
	},
});
