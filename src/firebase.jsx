import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCxMlqkHlborB2x8ba2u0rIq0sgLCNQ4Cc",
  authDomain: "ecs-website-64137.firebaseapp.com",
  projectId: "ecs-website-64137",
  storageBucket: "ecs-website-64137.appspot.com",
  messagingSenderId: "630526752481",
  appId: "1:630526752481:web:6502f468793eac518569a0",
  measurementId: "G-65PX72FFDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
