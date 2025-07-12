import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCj1-S_sOgP5vwK4zZA2wrGjohRyqPUsz4",
  authDomain: "questro-80b47.firebaseapp.com",
  projectId: "questro-80b47",
  storageBucket: "questro-80b47.firebasestorage.app",
  messagingSenderId: "450035541113",
  appId: "1:450035541113:web:26b93a376fc039634be0a8",
  measurementId: "G-NRSM25QS8Q"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);