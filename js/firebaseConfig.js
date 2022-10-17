// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3PHCkv507CTW_2q_5fVbkbSaGNqO88go",
    authDomain: "embebido-proyect.firebaseapp.com",
    projectId: "embebido-proyect",
    storageBucket: "embebido-proyect.appspot.com",
    messagingSenderId: "839364945125",
    appId: "1:839364945125:web:d78461886a282e3ed6200c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
