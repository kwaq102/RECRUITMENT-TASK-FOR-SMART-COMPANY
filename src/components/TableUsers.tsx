import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { TableSingleUser } from "./TebleSingleUser";
import { useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/userSilce";
import { useEffect } from "react";
import axios from "axios";

const TableUsers = () => {
	const dispatch: AppDispatch = useDispatch();
	const users = useSelector((state: RootState) => state.users.users);

	const getUsers = async () => {
		try {
			const res = await axios.get("https://jsonplaceholder.typicode.com/users");
			const data = await res.data;

			dispatch(fetchUsers(data));
		} catch (e) {
			console.log("błąd");
			console.log(e);
			// TODO oagarnąć obługę błędó w axios
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<table className="tableUsers">
			<thead className="">
				<tr className="">
					<th className="">No.</th>
					<th className="">User Name</th>
					<th className="">Name</th>
					<th className="">Email</th>
					<th className="">Phone</th>
				</tr>
			</thead>
			<tbody className="">
				{users.map((el, i) => (
					<TableSingleUser user={el} no={i + 1} key={el.id} />
				))}
			</tbody>
		</table>
	);
};

export { TableUsers };
