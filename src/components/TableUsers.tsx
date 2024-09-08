import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import axios from "axios";
import { useSelector } from "react-redux";
import {
	fetchUsers,
	filteredUsers,
	setFilterEmail,
	setFilterNameNick,
	setFilterPhone,
	setFilterUserName,
} from "../redux/features/userSilce";
import { TableSingleUser } from "./TebleSingleUser";
import TableHeadUser from "./TableHeadUser";

const TableUsers = () => {
	const dispatch: AppDispatch = useDispatch();
	const users = useSelector(filteredUsers);

	const getUsers = async () => {
		try {
			const res = await axios.get("https://jsonplaceholder.typicode.com/users");
			const data = await res.data;

			dispatch(fetchUsers(data));
		} catch (e) {
			console.log("błąd");
			console.log(e);
			// TODO oagarnąć obługę błędów w axios
		}
	};

	useEffect(() => {
		getUsers();
	}, [dispatch]);

	// TODO poszukać rozwiązania aby zrobić z tego jedną funkcję ?
	const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilterNameNick(e.target.value));
	};

	const handleUserNameFilterChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch(setFilterUserName(e.target.value));
	};

	const handleEmailFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilterEmail(e.target.value));
	};

	const handlePhoneFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilterPhone(e.target.value));
	};

	return (
		<>
			<table className="tableUsers">
				<thead className="tableUsers__head">
					<tr className="tableUsers__head__row">
						<TableHeadUser text="No." />
						<TableHeadUser
							text="Name"
							placeholder="Filter by Name"
							handleFilter={handleNameFilterChange}
						/>
						<TableHeadUser
							text="User Name"
							placeholder="Filter by User Name"
							handleFilter={handleUserNameFilterChange}
						/>
						<TableHeadUser
							text="Email"
							placeholder="Filter by email"
							handleFilter={handleEmailFilterChange}
						/>
						<TableHeadUser
							text="Phone"
							placeholder="Filter by phone"
							handleFilter={handlePhoneFilterChange}
						/>
					</tr>
				</thead>
				<tbody className="tableUsers__body">
					{users.map((user, i) => (
						<TableSingleUser user={user} no={i + 1} key={user.id} />
					))}
				</tbody>
			</table>
		</>
	);
};

export { TableUsers };
