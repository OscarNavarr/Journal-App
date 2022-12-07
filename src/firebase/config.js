// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbfSeRcodKxU1ZZsitY8OgufR_QNtxJSY",
  authDomain: "react-cours-4ec0f.firebaseapp.com",
  projectId: "react-cours-4ec0f",
  storageBucket: "react-cours-4ec0f.appspot.com",
  messagingSenderId: "849041594347",
  appId: "1:849041594347:web:9f77fd693836623ae7abae"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );