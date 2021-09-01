import React from "react";
import ImageUploader from "./components/ImageUploader";
import ImageUploaded from "./components/ImageUploaded";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import { useSelector } from "react-redux";

import "@fontsource/poppins";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import firebase from "./firebase/firebase";

function App() {
  const loaded = useSelector((state) => state.imageUpload.loaded);
  const loading = useSelector((state) => state.imageUpload.loading);

  return (
    <div className="App min-w-screen min-h-screen w-full h-full bg-[#FAFAFB] flex flex-col">
      {/*First Check if the image is not loaded - if it is then check if it should display upload component or progress when loading*/}
      {!loaded ? (
        !loading ? (
          <ImageUploader />
        ) : (
          <ProgressBar />
        )
      ) : (
        <ImageUploaded></ImageUploaded>
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
