import { User } from "../Types/types";

interface Props {
	no: number;
	user: User;
}

const TableSingleUser = ({ user, no }: Props) => {
	const { username, name, email, phone } = user;

	return (
		<>
			<tr className="tableUsers__body__row">
				<th className="tableUsers__body__cell tableUsers__body__cell-- header">
					{no}
				</th>
				<td>{username}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td>{phone}</td>
			</tr>
		</>
	);
};

export { TableSingleUser };
