// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWzEfOigUMpVfoE8spNfKVUF64mWeoBHU",
    authDomain: "hs-final-ad488.firebaseapp.com",
    projectId: "hs-final-ad488",
    storageBucket: "hs-final-ad488.appspot.com",
    messagingSenderId: "317391454793",
    appId: "1:317391454793:web:cc35db2d4b3be9593ef598",
    measurementId: "G-WCEJ7H0C07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);