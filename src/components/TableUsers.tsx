import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import axios from "axios";
import { useSelector } from "react-redux";
import {
	fetchUsers,
	fetchUsersFail,
	fetchUsersSuccess,
	filteredUsers,
	setFilterEmail,
	setFilterNameNick,
	setFilterPhone,
	setFilterUserName,
} from "../redux/features/userSilce";
import { TableSingleUser } from "./TebleSingleUser";
import { TableHeadUser } from "./TableHeadUser";
import { Error } from "./Error";
import { Loader } from "./Loader";

const TableUsers = () => {
	const dispatch: AppDispatch = useDispatch();
	const users = useSelector(filteredUsers);
	const loading = useSelector((state: RootState) => state.users.loading);
	const error = useSelector((state: RootState) => state.users.error);

	const getUsers = async () => {
		try {
			dispatch(fetchUsers());
			const res = await axios.get("https://jsonplaceholder.typicode.com/users");
			const data = await res.data;
			dispatch(fetchUsersSuccess(data));
		} catch (e) {
			dispatch(fetchUsersFail("Error"));
		}
	};

	useEffect(() => {
		getUsers();
	}, [dispatch]);

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

	const usersGenerate = () =>
		users.map((user, i) => {
			return <TableSingleUser user={user} no={i + 1} key={user.id} />;
		});

	return (
		<>
			<div className="tableUsers__wrapper">
				<table className="tableUsers">
					<thead className="tableUsers__head">
						<tr className="tableUsers__head__row">
							<TableHeadUser text="No." />
							<TableHeadUser
								text="Name"
								placeholder="Search nick"
								handleFilter={handleNameFilterChange}
							/>
							<TableHeadUser
								text="User Name"
								placeholder="Search User Name"
								handleFilter={handleUserNameFilterChange}
							/>
							<TableHeadUser
								text="Email"
								placeholder="Search email"
								handleFilter={handleEmailFilterChange}
							/>
							<TableHeadUser
								text="Phone"
								placeholder="Search phone"
								handleFilter={handlePhoneFilterChange}
							/>
						</tr>
					</thead>
					<tbody className="tableUsers__body">
						{!loading && !error && usersGenerate()}
					</tbody>
				</table>
			</div>
			<div className="tabelUser__loader">{loading && <Loader />}</div>
			<div className="tableUser__error">
				{error && (
					<Error errorMessage="Ups... Something went wrong. Try again later." />
				)}
			</div>
		</>
	);
};

export { TableUsers };
