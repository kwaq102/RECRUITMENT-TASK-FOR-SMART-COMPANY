import { combineReducers } from "redux";
import userReducer from "../features/userSilce";


export const rootReducer = combineReducers({
    users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


