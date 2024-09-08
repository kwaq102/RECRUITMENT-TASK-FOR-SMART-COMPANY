import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Users } from '../../Types/types';

// // Typ stanu
// interface UserState {
//     users: User[];
// }

// Stan początkowy
const initialState: Users = {
    users: [],
};

// Slice
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },

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
export const { fetchUsers } = userSlice.actions;

// Eksportuj reducer
export default userSlice.reducer;
