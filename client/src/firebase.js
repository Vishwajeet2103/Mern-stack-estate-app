// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-da0ac.firebaseapp.com",
  projectId: "mern-estate-da0ac",
  storageBucket: "mern-estate-da0ac.appspot.com",
  messagingSenderId: "38057277108",
  appId: "1:38057277108:web:a80656b5e464afe0cdc9e1",
  measurementId: "G-LVWNPBZM8Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
