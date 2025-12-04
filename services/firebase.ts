import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC93Z_7dOVZaw0WMABIvaF1pTtULUttbMw",
  authDomain: "diagnostic-website-5f675.firebaseapp.com",
  projectId: "diagnostic-website-5f675",
  storageBucket: "diagnostic-website-5f675.firebasestorage.app",
  messagingSenderId: "998063044292",
  appId: "1:998063044292:web:de8fd5a64d8f72d2c4bb91",
  measurementId: "G-0DTZFV83K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Remove analytics from development
export const analytics = null;
