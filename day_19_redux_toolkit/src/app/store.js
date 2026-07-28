import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/features/counterSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});