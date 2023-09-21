import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwQPF82wyGw1SPm6KI6CGIwOWglPSoh0U",
  authDomain: "facebook-clone-7016d.firebaseapp.com",
  projectId: "facebook-clone-7016d",
  storageBucket: "facebook-clone-7016d.appspot.com",
  messagingSenderId: "800773683333",
  appId: "1:800773683333:web:ccaf843fac327b61bd91ec",
  measurementId: "G-172G00JZN9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
