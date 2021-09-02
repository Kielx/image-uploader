// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9xpfGHhdGahNESCVBrZPVidtrdZptJJg",
  authDomain: "image-uploader-6123a.firebaseapp.com",
  projectId: "image-uploader-6123a",
  storageBucket: "image-uploader-6123a.appspot.com",
  messagingSenderId: "353217847079",
  appId: "1:353217847079:web:12f7b969f9209c55ee9302",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider("6Lcjiz8cAAAAAEk0OUJE61TBAbHqmGyS_FnLao5F"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export default firebase;
