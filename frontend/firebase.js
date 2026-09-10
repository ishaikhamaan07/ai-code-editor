import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "nexuscode-77a30.firebaseapp.com",
  projectId: "nexuscode-77a30",
  storageBucket: "nexuscode-77a30.firebasestorage.app",
  messagingSenderId: "205365448436",
  appId: "1:205365448436:web:e3758da1591a37d26a18a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();