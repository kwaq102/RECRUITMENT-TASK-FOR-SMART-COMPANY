import React, { useState } from "react";
import { User } from "../Types/types";

interface Props {
	no: number;
	user: User;
}

const TableSingleUser = ({ user, no }: Props) => {
	const { username, name, email, phone } = user;

	return (
		<>
			<tr>
				<td>{no}</td>
				<td>{username}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td>{phone}</td>
			</tr>
		</>
	);
};

export { TableSingleUser };
