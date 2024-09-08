import { TableUsers } from "./TableUsers";

const UsersPage = () => {
	return (
		<div className="usersPage">
			<h1 className="usersPage__heading">
				Users <span>Page</span>
			</h1>
			<TableUsers />
		</div>
	);
};

export { UsersPage };
