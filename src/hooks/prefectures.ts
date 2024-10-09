// import { useEffect, useState } from "react";
// import axios from "../config/axios";
// import type { Prefecture, PrefectureResponse } from "../type";

// export const usePrefectures = () => {
// 	const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string | null>(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get("prefectures");
// 				const results: PrefectureResponse = response.data;
// 				setPrefectures(results.result);
// 				setLoading(false);
// 			} catch (err) {
// 				setError("データの取得に失敗しました");
// 				setLoading(false);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	return { prefectures, loading, error };
// };
