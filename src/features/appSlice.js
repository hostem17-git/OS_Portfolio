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
        }
    },
});

export const { login, logout } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const checkloginStatus = (state) => { return state.app.loggedIn };
export const getUserName = (state) => { return state.app.name };

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default appSlice.reducer;
