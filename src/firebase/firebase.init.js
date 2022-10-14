// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtaXW-06SZAcliLg6od_HCpiajZPdKZdc",
  authDomain: "timple-firebase-auth-1cd89.firebaseapp.com",
  projectId: "timple-firebase-auth-1cd89",
  storageBucket: "timple-firebase-auth-1cd89.appspot.com",
  messagingSenderId: "87365971570",
  appId: "1:87365971570:web:1fc7b2332aa620ff6edceb",
  measurementId: "G-NCQP041PP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
