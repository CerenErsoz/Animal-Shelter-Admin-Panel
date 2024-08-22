// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT3eByam9dspnvMq3QLOKFbxi-jUtA8wY",
  authDomain: "animalshelter-7fd29.firebaseapp.com",
  projectId: "animalshelter-7fd29",
  storageBucket: "animalshelter-7fd29.appspot.com",
  messagingSenderId: "364004224362",
  appId: "1:364004224362:web:ec902a47a05e1d491ac913",
  measurementId: "G-J2HE8844C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);