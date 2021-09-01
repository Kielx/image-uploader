import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";
// eslint-disable-next-line no-unused-vars
import firebase from "./firebase/firebase";
import "@fontsource/poppins";
import "./App.css";

const ImageUploader = lazy(() => import("./components/ImageUploader"));
const ImageUploaded = lazy(() => import("./components/ImageUploaded"));
const Footer = lazy(() => import("./components/Footer"));
const ProgressBar = lazy(() => import("./components/ProgressBar"));

function App() {
  const loaded = useSelector((state) => state.imageUpload.loaded);
  const loading = useSelector((state) => state.imageUpload.loading);

  return (
    <div className="App min-w-screen min-h-screen w-full h-full bg-[#FAFAFB] flex flex-col p-2">
      {/*First Check if the image is not loaded - if it is then check if it should display upload component or progress when loading*/}
      {!loaded ? (
        !loading ? (
          <Suspense fallback={<LoadingSpinner />}>
            <ImageUploader />
          </Suspense>
        ) : (
          <Suspense fallback={<LoadingSpinner />}>
            <ProgressBar />
          </Suspense>
        )
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <ImageUploaded></ImageUploaded>
        </Suspense>
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
