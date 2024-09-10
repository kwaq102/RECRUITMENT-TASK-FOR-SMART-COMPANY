export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export interface Users {
    users: User[];
}

export interface UsersState {
    users: User[];
    filterNameNick: string;
    filterUserName: string;
    filterEmail: string;
    filterPhone: string;
    loading: boolean;
    error: string | null;
}

