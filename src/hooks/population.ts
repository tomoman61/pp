// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelectedPrefectures } from "../state/selectedPrefectureCodes";
// import type { PopulationResponse } from "../type";

// export const usePopulation = () => {
// 	const [population, setPopulation] = useState<{
// 		[key: number]: PopulationResponse;
// 	}>({});
// 	const { selectedPrefectureCodes, handleCheck } = useSelectedPrefectures();

// 	useEffect(() => {
// 		for (const prefCode of selectedPrefectureCodes) {
// 			if (!population[prefCode]) {
// 				axios
// 					.get(`population/composition/perYear?prefCode=${prefCode}&cityCode=-`)
// 					.then((response) => {
// 						const results: PopulationResponse = response.data;
// 						setPopulation((prev) => ({
// 							...prev,
// 							[prefCode]: results,
// 						}));
// 						console.log(results.result.data);
// 					});
// 			}
// 		}
// 	}, [selectedPrefectureCodes, population]);

// 	return { selectedPrefectureCodes, handleCheck };
// };
