export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT7_kzPj-_Mi4zd9zGN_Rt4FLjF8njSCU",
  authDomain: "tax-filing-solutions.firebaseapp.com",
  projectId: "tax-filing-solutions",
  storageBucket: "tax-filing-solutions.appspot.com",
  messagingSenderId: "680481945877",
  appId: "1:680481945877:web:a6fa8e4cfc0acadd8ed11c",
  measurementId: "G-NVPNQ3Q57T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);