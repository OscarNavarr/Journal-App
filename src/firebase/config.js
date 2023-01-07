// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC-DWvEc-Bphh9m2HKSfEEKI9to_ynyac",
  authDomain: "react-cursos-2f99f.firebaseapp.com",
  projectId: "react-cursos-2f99f",
  storageBucket: "react-cursos-2f99f.appspot.com",
  messagingSenderId: "714220066375",
  appId: "1:714220066375:web:863f0db512d35c906fc362"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
