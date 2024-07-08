// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjVmcG4szlZeeQ7-PMZgHwaj-KDCUO6EE",
  authDomain: "authcrud-54c32.firebaseapp.com",
  projectId: "authcrud-54c32",
  storageBucket: "authcrud-54c32.appspot.com",
  messagingSenderId: "338290235869",
  appId: "1:338290235869:web:8dc9a24ad27658d640fe34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)