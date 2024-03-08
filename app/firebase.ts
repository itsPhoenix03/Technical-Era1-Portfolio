// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "technical-era1-dev.firebaseapp.com",
  projectId: "technical-era1-dev",
  storageBucket: "technical-era1-dev.appspot.com",
  messagingSenderId: "32582477728",
  appId: "1:32582477728:web:f40fb5517181eeb4cbe6c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
