import axios from "@/config/axios";
import { populationAtom } from "@/recoil";
import type { Prefecture } from "@/type";
import { type ChangeEvent, useRef } from "react";
import { useRecoilState } from "recoil";

const Checkbox = ({ prefecture }: { prefecture: Prefecture }) => {
	const checkedRef = useRef<boolean>(false);
	const [population, setPopulation] = useRecoilState(populationAtom);

	const handleCheck = (prefName: string, prefCode: number, check: boolean) => {
		checkedRef.current = check;

		if (check) {
			axios
				.get(`population/composition/perYear?prefCode=${prefCode}`)
				.then((results) => {
					setPopulation([
						...population,
						{
							prefName: prefName,
							data: results.data.result.data[0].data,
						},
					]);
				});
			return;
		}

		setPopulation(
			[...population].filter((value) => value.prefName !== prefName),
		);
	};

	return (
		<>
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
					${checkedRef.current ? "bg-gradient-to-r border-current from-customBlue/75 to-customBlue text-white" : "bg-white"}`}
			>
				{prefecture.prefName}
			</label>
		</>
	);
};

export default Checkbox;
