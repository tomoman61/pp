import type { Population, Prefecture } from "@/type";
import { atom } from "recoil";

export const prefecturesAtom = atom<Prefecture[]>({
	key: "prefectures",
	default: [],
});

export const populationAtom = atom<
	{ prefName: string; data: Omit<Population, "rate">[] }[]
>({
	key: "population",
	default: [],
});
