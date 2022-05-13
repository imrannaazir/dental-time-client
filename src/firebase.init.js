// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlR8aD8TtnGmYeLE8QkRhA8s-m4axSYdE",
    authDomain: "dentals-time.firebaseapp.com",
    projectId: "dentals-time",
    storageBucket: "dentals-time.appspot.com",
    messagingSenderId: "1037017805623",
    appId: "1:1037017805623:web:76060b67a77f8a9e2ae0b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;