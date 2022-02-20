// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOdGha_ruL2jem31eGw5YTGCQvDmg9jLE",
  authDomain: "recipes-app-534d3.firebaseapp.com",
  projectId: "recipes-app-534d3",
  storageBucket: "recipes-app-534d3.appspot.com",
  messagingSenderId: "494665642015",
  appId: "1:494665642015:web:938f4ffd49c0cd3aa8252a",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
