import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import imageUploadReducer from "./imageUploadSlice";

export const store = configureStore({
  reducer: {
    progress: progressReducer,
    imageUpload: imageUploadReducer,
  },
});
