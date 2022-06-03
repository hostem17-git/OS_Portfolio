import { createSlice } from '@reduxjs/toolkit';

export const folderSlice = createSlice({
    name: 'folder',
    initialState: {
        aboutMeVisibility: true,
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
        },
        ToggleAboutMe: (state) => {
            state.aboutMeVisibility = !state.aboutMeVisibility;
        },
    },
});

export const { setFolder, showAboutMe, hideAboutMe, ToggleAboutMe } = folderSlice.actions;

export const getFolder = (state) => { return state.folder.name };
export const getAboutMeVisibility = (state) => { return state.folder.aboutMeVisibility }

export default folderSlice.reducer;
