import { User } from "../../Types/types";


export const FETCH_USERS = "FETCH_USERS"

interface FetchUsersAction {
    type: typeof FETCH_USERS;
    payload: User[];
}

export type UserActionTypes = FetchUsersAction;