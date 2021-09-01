import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  loading: false,
  loaded: false,
  downloadURL: "",
  uploadedImage: null,
};

export const imageUploadSlice = createSlice({
  name: "imageUpload",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLoaded: (state, action) => {
      state.loaded = action.payload;
    },
    setDownloadURL: (state, action) => {
      state.downloadURL = action.payload;
    },
    setUploadedImage: (state, action) => {
      state.uploadedImage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setLoaded, setDownloadURL, setUploadedImage } =
  imageUploadSlice.actions;

export default imageUploadSlice.reducer;
