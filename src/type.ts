// https://opendata.resas-portal.go.jp/api/v1/prefectures
export type Prefecture = {
	prefCode: number;
	prefName: string;
};

export type PrefectureResponse = {
	message: string | null;
	result: Prefecture[];
};

// https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=1&cityCode=-
export const PopulationLabels = {
	TOTAL: "総人口" as const,
	YOUNG: "年少人口" as const,
	WORKING_AGE: "生産年齢人口" as const,
	ELDERLY: "老年人口" as const,
};

export type Population = {
	year: number;
	value: number;
	rate: number;
};

export type TotalPopulationStatistics = {
	label: typeof PopulationLabels.TOTAL;
	records: Omit<Population, "rate">[];
};

export type PopulationStatistics = {
	label:
		| typeof PopulationLabels.YOUNG
		| typeof PopulationLabels.WORKING_AGE
		| typeof PopulationLabels.ELDERLY;
	records: Population[];
};

export type PopulationResponse = {
	message: string | null;
	result: {
		boundaryYear: number;
		data: (TotalPopulationStatistics | PopulationStatistics)[];
	} | null;
};
