import { createSlice } from '@reduxjs/toolkit';

export const folderSlice = createSlice({
    name: 'folder',
    initialState: {
        name: "About Me",
    },

    reducers: {

        setFolder: (state, action) => {
            state.name = action.payload.name;
        },
    },
});

export const { setFolder } = folderSlice.actions;

export const getFolder = (state) => { return state.folder.name };

export default folderSlice.reducer;
