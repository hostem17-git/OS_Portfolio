import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        loggedIn: false,
        name: "User"
    },

    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.name = action.payload.name;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.name = "User";
        }
    },
});

export const { login, logout } = appSlice.actions;

export const checkloginStatus = (state) => { return state.app.loggedIn };
export const getUserName = (state) => { return state.app.name.name };


export default appSlice.reducer;
