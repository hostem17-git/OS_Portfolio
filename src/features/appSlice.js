import { createSlice } from '@reduxjs/toolkit';



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        loggedIn: false,
        name: null
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.name = action.payload.name;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.name = null;
        }
    },
});

export const { login, logout } = appSlice.actions;

export const checkloginStatus = (state) => { return state.app.loggedIn };
export const getUserName = (state) => { return state.app.name };


export default appSlice.reducer;
