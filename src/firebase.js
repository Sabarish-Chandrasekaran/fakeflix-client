// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpB92iUySMoKh-26OC1j5NW-aD5I60P1I",
  authDomain: "fakeflix-d0dab.firebaseapp.com",
  projectId: "fakeflix-d0dab",
  storageBucket: "fakeflix-d0dab.appspot.com",
  messagingSenderId: "631395867200",
  appId: "1:631395867200:web:9abce44e35c271d3ec9da5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
