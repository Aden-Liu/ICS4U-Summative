// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTTFPsHSMiOaQ_WzFfxjBoPBGu08_s5U",
  authDomain: "going-bankrupt.firebaseapp.com",
  projectId: "going-bankrupt",
  storageBucket: "going-bankrupt.appspot.com",
  messagingSenderId: "312046043401",
  appId: "1:312046043401:web:f0543594808d3fb26c93d8",
  measurementId: "G-BY2XY7X24E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
