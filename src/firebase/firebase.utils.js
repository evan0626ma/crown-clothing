import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkki6ESS_5TaviQxxrybOi_GRgMBLaVf4",
    authDomain: "crown-db-9a225.firebaseapp.com",
    projectId: "crown-db-9a225",
    storageBucket: "crown-db-9a225.appspot.com",
    messagingSenderId: "1026874844964",
    appId: "1:1026874844964:web:e0395561a6f8fae1e375b1",
    measurementId: "G-T4P6TQWVPE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GithubAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;