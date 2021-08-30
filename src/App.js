import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageUploaded from "./components/ImageUploaded";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import "@fontsource/poppins";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import firebase from "./firebase/firebase";

function App() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <div className="App min-w-screen min-h-screen w-full h-full bg-[#FAFAFB] flex flex-col">
      {/*First Check if the image is not loaded - if it is then check if it should display upload component or progress when loading*/}
      {!loaded ? (
        !loading ? (
          <ImageUploader
            setLoading={setLoading}
            setProgress={setProgress}
            setLoaded={setLoaded}
            setUploadedImage={setUploadedImage}
            setDownloadURL={setDownloadURL}
          />
        ) : (
          <ProgressBar progress={progress} />
        )
      ) : (
        <ImageUploaded
          uploadedImage={uploadedImage}
          downloadURL={downloadURL}
        ></ImageUploaded>
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
