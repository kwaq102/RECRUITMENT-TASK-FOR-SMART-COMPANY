import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../Types/types';
import { RootState } from '../store/store';


// TODO to przenieść do typów
// Typ stanu

interface UserState {
    users: User[];
    filterNameNick: string;
    filterUserName: string;
    filterEmail: string;
    filterPhone: string;
}

// Stan początkowy
const initialState: UserState = {
    users: [],
    filterNameNick: '',
    filterUserName: '',
    filterEmail: '',
    filterPhone: '',
};

// Slice
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },

        setFilterNameNick(state, action: PayloadAction<string>) {
            state.filterNameNick = action.payload;
        },

        setFilterUserName(state, action: PayloadAction<string>) {
            state.filterUserName = action.payload;
        },

        setFilterEmail(state, action: PayloadAction<string>) {
            state.filterEmail = action.payload;
        },

        setFilterPhone(state, action: PayloadAction<string>) {
            state.filterPhone = action.payload;
        }

        // fetchUsersSuccess(state, action: PayloadAction<User[]>) {
        //     state.users = action.payload;
        // },
        // fetchUsersSuccess(state, action: PayloadAction<User[]>) {
        //     state.users = action.payload;
        //     state.loading = false;
        // },
        // fetchUsersFailure(state, action: PayloadAction<string>) {
        //     state.error = action.payload;
        //     state.loading = false;
        // },


    },
});

// Eksportuj akcje
export const { fetchUsers, setFilterNameNick, setFilterEmail, setFilterPhone, setFilterUserName } = userSlice.actions;

// Eksportuj reducer
export default userSlice.reducer;


// Dodajemy funkcję selektora, która zwróci przefiltrowane elementy użytkowników
export const filteredUsers = (state: RootState) => {
    const { users, filterNameNick, filterUserName, filterEmail, filterPhone } = state.users;

    return users.filter((user) => {
        const filtredNameNick = user.name.toLowerCase().includes(filterUserName.toLowerCase());
        const filtredUserName = user.username.toLowerCase().includes(filterNameNick.toLowerCase());
        const filtredEmail = user.email.toLowerCase().includes(filterEmail.toLowerCase());
        const filtredPhone = user.phone.toLowerCase().includes(filterPhone.toLowerCase());

        return filtredNameNick && filtredUserName && filtredEmail && filtredPhone;
    });
};
