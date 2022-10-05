import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACcN9xx9PmyaIXoeu-konsksS7djrMDgU",
    authDomain: "crown-clothing-db-f4107.firebaseapp.com",
    projectId: "crown-clothing-db-f4107",
    storageBucket: "crown-clothing-db-f4107.appspot.com",
    messagingSenderId: "1061393535805",
    appId: "1:1061393535805:web:f12ed342e83f4afe322b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    // If the user data does not exist

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createDate });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    // If the user data exist

    return userDocRef;

}