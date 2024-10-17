import Graph from "@/components/Graph";
import { populationAtom } from "@/recoil";
import { PopulationLabels } from "@/type";
import { type ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";

const Graphs = () => {
	const [population] = useRecoilState(populationAtom);
	const [selectedPopulation, setSelectedPopulation] = useState<string>(
		PopulationLabels.TOTAL,
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedPopulation(e.target.value);
	};

	return (
		<section>
			<fieldset>
				<legend className="font-bold text-xl">人口推移グラフ</legend>
				<div className="flex flex-wrap p-4 gap-3">
					<div>
						<input
							type="radio"
							name="population"
							id="total"
							value={PopulationLabels.TOTAL}
							className="cursor-pointer"
							checked={selectedPopulation === PopulationLabels.TOTAL}
							onChange={handleChange}
						/>
						<label
							htmlFor="total"
							className={"p-2 cursor-pointer hover:opacity-70"}
						>
							{PopulationLabels.TOTAL}
						</label>
					</div>
					<div>
						<input
							type="radio"
							name="population"
							id="young"
							value={PopulationLabels.YOUNG}
							className="cursor-pointer"
							checked={selectedPopulation === PopulationLabels.YOUNG}
							onChange={handleChange}
						/>
						<label
							htmlFor="young"
							className={"p-2 cursor-pointer hover:opacity-70"}
						>
							{PopulationLabels.YOUNG}
						</label>
					</div>
					<div>
						<input
							type="radio"
							name="population"
							id="workingAge"
							value={PopulationLabels.WORKING_AGE}
							className="cursor-pointer"
							checked={selectedPopulation === PopulationLabels.WORKING_AGE}
							onChange={handleChange}
						/>
						<label
							htmlFor="workingAge"
							className={"p-2 cursor-pointer hover:opacity-70"}
						>
							{PopulationLabels.WORKING_AGE}
						</label>
					</div>
					<div>
						<input
							type="radio"
							name="population"
							id="elderly"
							value={PopulationLabels.ELDERLY}
							className="cursor-pointer"
							checked={selectedPopulation === PopulationLabels.ELDERLY}
							onChange={handleChange}
						/>
						<label
							htmlFor="elderly"
							className="p-2 cursor-pointer hover:opacity-70"
						>
							{PopulationLabels.ELDERLY}
						</label>
					</div>
				</div>
			</fieldset>
			{selectedPopulation === PopulationLabels.TOTAL && (
				<Graph
					populationCategories={population.total}
					title={PopulationLabels.TOTAL}
				/>
			)}
			{selectedPopulation === PopulationLabels.YOUNG && (
				<Graph
					populationCategories={population.young}
					title={PopulationLabels.YOUNG}
				/>
			)}
			{selectedPopulation === PopulationLabels.WORKING_AGE && (
				<Graph
					populationCategories={population.workingAge}
					title={PopulationLabels.WORKING_AGE}
				/>
			)}
			{selectedPopulation === PopulationLabels.ELDERLY && (
				<Graph
					populationCategories={population.elderly}
					title={PopulationLabels.ELDERLY}
				/>
			)}
		</section>
	);
};

export default Graphs;
