import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import folderReducer from '../features/folderSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    folder: folderReducer,
  },
});
