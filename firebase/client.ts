// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj1-S_sOgP5vwK4zZA2wrGjohRyqPUsz4",
  authDomain: "questro-80b47.firebaseapp.com",
  projectId: "questro-80b47",
  storageBucket: "questro-80b47.firebasestorage.app",
  messagingSenderId: "450035541113",
  appId: "1:450035541113:web:26b93a376fc039634be0a8",
  measurementId: "G-NRSM25QS8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);