interface Props {
	placeholder?: string;
	handleFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFilter = ({ handleFilter, placeholder }: Props) => {
	return (
		<input
			className="tableUsers__head__row__input"
			type="text"
			onChange={handleFilter}
		/>
	);
};

export { InputFilter };
