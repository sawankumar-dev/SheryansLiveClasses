import { createSlice } from "@reduxjs/toolkit";

const authUser = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser: (state) => {
            state.user = null;
            isAuthenticated= false;
        }
    }
})

export const { addUser, removeUser } = authUser.actions
export default authUser.reducer