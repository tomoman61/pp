import Checkbox from "@/components/Checkbox";
import axios from "@/config/axios";
import { prefecturesAtom } from "@/recoil";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Prefectures = () => {
	const [prefectures, setPrefectures] = useRecoilState(prefecturesAtom);

	useEffect(() => {
		axios
			.get("prefectures")
			.then((results) => {
				setPrefectures(results.data);
			})
			.catch(() => {});
	}, [setPrefectures]);

	if (prefectures === null) return <>読み込み中です...</>;

	return (
		<fieldset className="my-4">
			<legend className="font-bold text-xl">都道府県</legend>
			<ul className="flex flex-wrap p-4">
				{prefectures.result.map((prefecture) => (
					<div key={prefecture.prefName}>
						<Checkbox {...prefecture} />
					</div>
				))}
			</ul>
		</fieldset>
	);
};

export default Prefectures;
