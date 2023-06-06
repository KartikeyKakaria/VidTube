// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAUQLFVNcOMyMcoY4oTOP-cnbOgcQrdUK4",
    authDomain: "video-39194.firebaseapp.com",
    projectId: "video-39194",
    storageBucket: "video-39194.appspot.com",
    messagingSenderId: "352250192923",
    appId: "1:352250192923:web:7c31876fb64baa6d5484be",
    measurementId: "G-QH8XR1V62X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app