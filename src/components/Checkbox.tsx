import { populationAtom } from "@/recoil";
import type { Prefecture } from "@/type";
import axios from "axios";
import { type ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";

const Checkbox = (prefecture: Prefecture) => {
	const [checked, setChecked] = useState<boolean>(false);
	const [prefPopulation, setPrefPopulation] = useRecoilState(populationAtom);
	const handleCheck = (prefName: string, prefCode: number, check: boolean) => {
		const c_prefPopulation = prefPopulation.slice();
		if (check) {
			if (
				c_prefPopulation?.findIndex((value) => value.prefName === prefName) !==
				-1
			)
				return;

			axios
				.get(`population/composition/perYear?prefCode=${prefCode}`)
				.then((results) => {
					c_prefPopulation.push({
						prefName: prefName,
						data: results.data.result.data[0].data,
					});

					setPrefPopulation(c_prefPopulation);
				})
				.catch(() => {
					return;
				});
		} else {
			const deleteIndex = c_prefPopulation.findIndex(
				(value) => value.prefName === prefName,
			);
			if (deleteIndex === -1) return;
			c_prefPopulation.splice(deleteIndex, 1);
			setPrefPopulation(c_prefPopulation);
		}
		setChecked((prev) => !prev);
	};
	return (
		<li className="flex m-2">
			<input
				type="checkbox"
				name="prefecture"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					handleCheck(
						prefecture.prefName,
						prefecture.prefCode,
						e.target.checked,
					)
				}
				id={`checkbox${prefecture.prefCode}`}
				className="hidden"
			/>
			<label
				htmlFor={`checkbox${prefecture.prefCode}`}
				className={`px-3 py-2 cursor-pointer rounded-3xl border-2 border-solid box-border hover:opacity-70
                    ${checked ? "bg-gradient-to-r border-current from-customBlue/75 to-customBlue text-white" : "bg-white"}`}
			>
				{prefecture.prefName}
			</label>
		</li>
	);
};

export default Checkbox;
