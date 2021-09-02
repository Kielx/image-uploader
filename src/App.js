import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";

// eslint-disable-next-line no-unused-vars
import firebase from "./firebase/firebase";
import "@fontsource/poppins";
import "./App.css";

const Card = lazy(() => import("./components/Card"));
const ImageUploader = lazy(() => import("./components/ImageUploader"));
const ImageUploaded = lazy(() => import("./components/ImageUploaded"));
const Footer = lazy(() => import("./components/Footer"));
const ProgressBar = lazy(() => import("./components/ProgressBar"));
const ToggleDarkMode = lazy(() => import("./components/ToggleDarkMode"));

function App() {
  const loaded = useSelector((state) => state.imageUpload.loaded);
  const loading = useSelector((state) => state.imageUpload.loading);

  return (
    <div className="transition-all App min-w-screen min-h-screen w-full h-full bg-[#FAFAFB] dark:bg-dp00 flex flex-col p-2">
      <Suspense fallback={<LoadingSpinner />}>
        <Card>
          {/*First Check if the image is not loaded - if it is then check if it should display upload component or progress when loading*/}
          {!loaded ? (
            !loading ? (
              <>
                <ToggleDarkMode />
                <ImageUploader />
              </>
            ) : (
              <ProgressBar />
            )
          ) : (
            <>
              <ToggleDarkMode />
              <ImageUploaded />
            </>
          )}
        </Card>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
