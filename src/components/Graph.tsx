import type {
	PopulationCategoryNotTotal,
	PopulationCategoryTotal,
	PopulationLabels,
} from "@/type";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type GraphProps = {
	populationCategories: (
		| PopulationCategoryTotal
		| PopulationCategoryNotTotal
	)[];
	title: (typeof PopulationLabels)[keyof typeof PopulationLabels];
};

const Graph = ({ populationCategories, title }: GraphProps) => {
	const prefectures: Highcharts.SeriesOptionsType[] = [];
	const xAxis: string[] = [];

	for (const p of populationCategories) {
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
			text: `${title}推移`,
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

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
