// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dough-rise.firebaseapp.com",
  projectId: "dough-rise",
  storageBucket: "dough-rise.appspot.com",
  messagingSenderId: "927225820428",
  appId: "1:927225820428:web:0f9a2f081ad2e2de20c529",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

