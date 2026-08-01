import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice.jsx"
import authUser from "./features/authSlice.jsx";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authUser
    }
})