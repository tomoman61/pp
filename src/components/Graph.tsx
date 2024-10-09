import { populationAtom } from "@/recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRecoilState } from "recoil";

const Graph = () => {
	const [prefPopulation] = useRecoilState(populationAtom);

	const prefectures: Highcharts.SeriesOptionsType[] = [];
	const xAxis: string[] = [];

	for (const p of prefPopulation) {
		const data = [];
		for (const pd of p.data) {
			data.push(pd.value);
			xAxis.push(String(pd.year));
		}

		prefectures.push({
			type: "line",
			name: p.prefName,
			data: data,
		});
	}

	const options: Highcharts.Options = {
		title: {
			text: "総人口推移",
		},
		xAxis: {
			title: {
				text: "年度",
			},
			categories: xAxis,
		},
		yAxis: {
			title: {
				text: "人口数",
			},
		},
		series:
			prefectures.length === 0
				? [{ type: "line", name: "都道府県名", data: [] }]
				: prefectures,
	};

	return (
		<section>
			<h2 className="font-bold text-xl">人口推移グラフ</h2>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</section>
	);
};

export default Graph;
