// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "find-h-28647.firebaseapp.com",
  projectId: "find-h-28647",
  storageBucket: "find-h-28647.appspot.com",
  messagingSenderId: "575465072061",
  appId: "1:575465072061:web:66a5de49a7c9e6bebd9ed4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
