import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeHujLM9QGzbcCqxwX23ZbWM2IPEr4BFc",
  authDomain: "sunny-9b186.firebaseapp.com",
  projectId: "sunny-9b186",
  storageBucket: "sunny-9b186.firebasestorage.app",
  messagingSenderId: "57809369886",
  appId: "1:57809369886:web:19db760b495a1f3cd2670f",
  measurementId: "G-2TQL4J1TZQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const linkedinProvider = new OAuthProvider('oidc.linkedin'); // If they want LinkedIn
