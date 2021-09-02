import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import imageUploadReducer from "./imageUploadSlice";
import darkModeReducer from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    progress: progressReducer,
    imageUpload: imageUploadReducer,
    darkMode: darkModeReducer,
  },
});
