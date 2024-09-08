import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSilce';

export const store = configureStore({
    reducer: {
        users: userReducer, // Używamy userReducer z createSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
