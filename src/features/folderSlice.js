import { createSlice } from '@reduxjs/toolkit';

export const folderSlice = createSlice({
    name: 'folder',
    initialState: {
        aboutMeVisibility: false,
        name: "About Me",
    },

    reducers: {

        setFolder: (state, action) => {
            state.name = action.payload.name;
        },
        showAboutMe: (state, payload) => {
            state.aboutMeVisibility = true;
        },
        hideAboutMe: (state) => {
            state.aboutMeVisibility = false;
        }
    },
});

export const { setFolder, showAboutMe, hideAboutMe } = folderSlice.actions;

export const getFolder = (state) => { return state.folder.name };
export const getAboutMeVisibility = (state) => { return state.folder.aboutMeVisibility }

export default folderSlice.reducer;
