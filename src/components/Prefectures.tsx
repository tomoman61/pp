import Checkbox from "@/components/Checkbox";
import type { Prefecture } from "@/type";

const Prefectures = ({ prefectures }: { prefectures: Prefecture[] }) => {
	return (
		<fieldset className="my-4">
			<legend className="font-bold text-xl">都道府県</legend>
			<ul className="flex flex-wrap p-4">
				{prefectures.map((prefecture) => (
					<li key={prefecture.prefCode} className="flex m-2">
						<Checkbox prefecture={prefecture} />
					</li>
				))}
			</ul>
		</fieldset>
	);
};

export default Prefectures;
