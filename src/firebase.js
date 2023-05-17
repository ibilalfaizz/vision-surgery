// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7zzNL2Bxt0cqWCnQT8dQDOo8sQHVDxGk",
  authDomain: "good-twitter-c5665.firebaseapp.com",
  projectId: "good-twitter-c5665",
  storageBucket: "good-twitter-c5665.appspot.com",
  messagingSenderId: "579621875193",
  appId: "1:579621875193:web:26adea8aa0599dac92e128",
  measurementId: "G-TJRKC3D3YS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // Initialize Auth
// initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
