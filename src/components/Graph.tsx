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
			<fieldset className="flex p-2">
				<div className="mx-2">
					<input type="radio" name="population" id="total" defaultChecked />
					<label htmlFor="total" className="pl-1">
						総人口
					</label>
				</div>
				<div className="mx-2">
					<input type="radio" name="population" id="young" />
					<label htmlFor="young" className="pl-1">
						年少人口
					</label>
				</div>
				<div className="mx-2">
					<input type="radio" name="population" id="working-age" />
					<label htmlFor="working-age" className="pl-1">
						生産年齢人口
					</label>
				</div>
				<div className="mx-2">
					<input type="radio" name="population" id="elderly" />
					<label htmlFor="elderly" className="pl-1">
						老年人口
					</label>
				</div>
			</fieldset>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</section>
	);
};

export default Graph;
