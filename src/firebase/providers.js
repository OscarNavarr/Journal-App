import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGoogle = async() => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log({credentials});
   
    } catch (error) {
        console.log(error);    
    }
}