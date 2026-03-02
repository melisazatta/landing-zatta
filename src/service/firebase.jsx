// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcpIxYrRSJKfUfev3TA6tyl22NoX1FO6s",
  authDomain: "coderhouse-zatta.firebaseapp.com",
  projectId: "coderhouse-zatta",
  storageBucket: "coderhouse-zatta.firebasestorage.app",
  messagingSenderId: "624780090667",
  appId: "1:624780090667:web:1654343a3e547b8297f96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)