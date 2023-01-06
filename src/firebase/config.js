// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB47OXhSDwQDkcwfLtRwHLL9zEpQGU4kMY",
  authDomain: "react-course2-a1a49.firebaseapp.com",
  projectId: "react-course2-a1a49",
  storageBucket: "react-course2-a1a49.appspot.com",
  messagingSenderId: "735547122667",
  appId: "1:735547122667:web:86f8385652402b76f22fae"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );