import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UsersState } from '../../Types/types';
import { RootState } from '../store/store';

const initialState: UsersState = {
    users: [],
    filterNameNick: '',
    filterUserName: '',
    filterEmail: '',
    filterPhone: '',
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers(state) {
            state.loading = true;
            state.error = null;
        },

        fetchUsersSuccess(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
            state.loading = false;
        },

        fetchUsersFail(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
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
    },
});

export const { fetchUsers, fetchUsersSuccess, fetchUsersFail, setFilterNameNick, setFilterEmail, setFilterPhone, setFilterUserName } = userSlice.actions;

export default userSlice.reducer;

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
