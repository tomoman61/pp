import { populationAtom } from "@/recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRecoilState } from "recoil";

const Graph = () => {
	const [population] = useRecoilState(populationAtom);

	const totalPrefectures: Highcharts.SeriesOptionsType[] = [];
	const youngPrefectures: Highcharts.SeriesOptionsType[] = [];
	const workingAgePrefectures: Highcharts.SeriesOptionsType[] = [];
	const elderlyPrefectures: Highcharts.SeriesOptionsType[] = [];
	const xAxis: string[] = [];

	for (const p of population.total) {
		const data = [];
		for (const pd of p.data) {
			data.push(pd.value);
			xAxis.push(String(pd.year));
		}

		totalPrefectures.push({
			type: "line",
			name: p.prefName,
			data: data,
		});
	}

	for (const p of population.young) {
		const data = [];
		for (const pd of p.data) {
			data.push(pd.value);
			xAxis.push(String(pd.year));
		}

		youngPrefectures.push({
			type: "line",
			name: p.prefName,
			data: data,
		});
	}

	for (const p of population.workingAge) {
		const data = [];
		for (const pd of p.data) {
			data.push(pd.value);
			xAxis.push(String(pd.year));
		}

		workingAgePrefectures.push({
			type: "line",
			name: p.prefName,
			data: data,
		});
	}

	for (const p of population.elderly) {
		const data = [];
		for (const pd of p.data) {
			data.push(pd.value);
			xAxis.push(String(pd.year));
		}

		elderlyPrefectures.push({
			type: "line",
			name: p.prefName,
			data: data,
		});
	}

	const totalOptions: Highcharts.Options = {
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
			totalPrefectures.length === 0
				? [{ type: "line", name: "都道府県名", data: [] }]
				: totalPrefectures,
	};

	const youngOptions: Highcharts.Options = {
		title: {
			text: "年少人口推移",
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
			youngPrefectures.length === 0
				? [{ type: "line", name: "都道府県名", data: [] }]
				: youngPrefectures,
	};

	const workingAgeOptions: Highcharts.Options = {
		title: {
			text: "生産年齢人口推移",
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
			workingAgePrefectures.length === 0
				? [{ type: "line", name: "都道府県名", data: [] }]
				: workingAgePrefectures,
	};
	const elderlyOptions: Highcharts.Options = {
		title: {
			text: "老年人口推移",
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
			elderlyPrefectures.length === 0
				? [{ type: "line", name: "都道府県名", data: [] }]
				: elderlyPrefectures,
	};

	return (
		<section>
			<h2 className="font-bold text-xl">人口推移グラフ</h2>
			<HighchartsReact highcharts={Highcharts} options={totalOptions} />
			<HighchartsReact highcharts={Highcharts} options={youngOptions} />
			<HighchartsReact highcharts={Highcharts} options={workingAgeOptions} />
			<HighchartsReact highcharts={Highcharts} options={elderlyOptions} />
		</section>
	);
};

export default Graph;
