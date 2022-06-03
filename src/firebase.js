// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_vcNcMt5PbJDXEqi_nSzA5p7gl3HtOIg",
  authDomain: "sam-haeng-si-dict.firebaseapp.com",
  projectId: "sam-haeng-si-dict",
  storageBucket: "sam-haeng-si-dict.appspot.com",
  messagingSenderId: "1059590825721",
  appId: "1:1059590825721:web:d6c4e4f4e31cc5a6bc2428",
  measurementId: "G-Q3XFM5M3MK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }
