import { InputFilter } from "./InputFilter";

interface Props {
	text: string;
	placeholder?: string;
	handleFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHeadUser = ({ handleFilter, text, placeholder }: Props) => {
	return (
		<th className="tableUsers__head__row__cell">
			{text}
			{placeholder && (
				<InputFilter placeholder={placeholder} handleFilter={handleFilter} />
			)}
		</th>
	);
};

export default TableHeadUser;
