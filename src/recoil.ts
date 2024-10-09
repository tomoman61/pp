import { atom } from "recoil";
import type { Population, PrefectureResponse } from "./type";

export const prefecturesAtom = atom<PrefectureResponse | null>({
	key: "prefectures",
	default: null,
});

export const populationAtom = atom<
	{ prefName: string; data: Omit<Population, "rate">[] }[]
>({
	key: "population",
	default: [],
});
