import ImageUploader from "./components/ImageUploader";
import Footer from "./components/Footer";
import "@fontsource/poppins";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import firebase from "./firebase/firebase";

function App() {
  return (
    <div className="App min-w-screen min-h-screen w-full h-full bg-[#FAFAFB] flex flex-col">
      <ImageUploader />
      <Footer></Footer>
    </div>
  );
}

export default App;
