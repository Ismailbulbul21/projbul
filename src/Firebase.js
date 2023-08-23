// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2OHjZk0G9kTlzYuYVARGpzFdAoTIN8Xo",
  authDomain: "oojaana-55377.firebaseapp.com",
  projectId: "oojaana-55377",
  storageBucket: "oojaana-55377.appspot.com",
  messagingSenderId: "346216735738",
  appId: "1:346216735738:web:5a698113145d5757573a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)