// import { useState } from "react";

// export const useSelectedPrefectures = () => {
// 	const [selectedPrefectureCodes, setSelectedPrefectureCodes] = useState<
// 		number[]
// 	>([]);

// 	const handleCheck = (prefCode: number) => {
// 		setSelectedPrefectureCodes((prevSelected) =>
// 			prevSelected.includes(prefCode)
// 				? prevSelected.filter((code) => code !== prefCode)
// 				: [...prevSelected, prefCode],
// 		);
// 	};

// 	return {
// 		selectedPrefectureCodes,
// 		handleCheck,
// 	};
// };
