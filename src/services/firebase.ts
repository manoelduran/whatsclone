import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBOW8cG4eHchMvVY6Q9S7PDSUhqrLVAs5c",
    authDomain: "whatsclone-ce29e.firebaseapp.com",
    projectId: "whatsclone-ce29e",
    storageBucket: "whatsclone-ce29e.appspot.com",
    messagingSenderId: "780532679163",
    appId: "1:780532679163:web:5c406aefacb070b4b4cb5e",
    measurementId: "G-P7RXES5XLW"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);




