// https://opendata.resas-portal.go.jp/api/v1/prefectures
export type Prefecture = {
	prefCode: number;
	prefName: string;
};

export type PrefectureSuccessResponse = {
	message: null;
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

type TotalPopulationStatistics = {
	label: typeof PopulationLabels.TOTAL;
	data: Omit<Population, "rate">[];
};

type PopulationYoungStatistics = {
	label: typeof PopulationLabels.YOUNG;
	data: Population[];
};

type PopulationWorkingAgeStatistics = {
	label: typeof PopulationLabels.WORKING_AGE;
	data: Population[];
};

type PopulationElderlyStatistics = {
	label: typeof PopulationLabels.ELDERLY;
	data: Population[];
};

export type PopulationSuccessResponse = {
	message: null;
	result: {
		boundaryYear: number;
		data: [
			TotalPopulationStatistics,
			PopulationYoungStatistics,
			PopulationWorkingAgeStatistics,
			PopulationElderlyStatistics,
		];
	};
};

export type PopulationCategoryTotal = {
	prefName: string;
	data: Omit<Population, "rate">[];
};

export type PopulationCategoryNotTotal = {
	prefName: string;
	data: Population[];
};

export type PopulationCategoryAll = {
	total: PopulationCategoryTotal[];
	young: PopulationCategoryNotTotal[];
	workingAge: PopulationCategoryNotTotal[];
	elderly: PopulationCategoryNotTotal[];
};
