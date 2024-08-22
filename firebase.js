// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT3eByam9dspnvMq3QLOKFbxi-jUtA8wY",
  authDomain: "animalshelter-7fd29.firebaseapp.com",
  databaseURL: "https://animalshelter-7fd29-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "animalshelter-7fd29",
  storageBucket: "animalshelter-7fd29.appspot.com",
  messagingSenderId: "364004224362",
  appId: "1:364004224362:web:ec902a47a05e1d491ac913",
  measurementId: "G-J2HE8844C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);  // Initialize the Realtime Database

export { db };
