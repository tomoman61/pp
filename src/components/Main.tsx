import Graphs from "@/components/Graphs";
import Prefectures from "@/components/Prefectures";
import axios from "@/config/axios";
import { prefecturesAtom } from "@/recoil";
import type { PrefectureSuccessResponse } from "@/type";
import type { AxiosResponse } from "axios";
import { useEffect } from "react";

import { useRecoilState } from "recoil";

const Main = () => {
	const [prefectures, setPrefectures] = useRecoilState(prefecturesAtom);

	useEffect(() => {
		axios
			.get("prefectures")
			.then((res: AxiosResponse<PrefectureSuccessResponse>) => {
				setPrefectures(res.data.result);
			})
			.catch(() => {});
	}, [setPrefectures]);
	if (prefectures.length === 0) return <>読み込み中です...</>;
	return (
		<main>
			<Prefectures prefectures={prefectures} />
			<Graphs />
		</main>
	);
};

export default Main;
