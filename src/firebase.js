// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyASbcXDKGcIV6OAMYWcmD36ux0sGov4vHc",
  authDomain: "clone-8b647.firebaseapp.com",
  projectId: "clone-8b647",
  storageBucket: "clone-8b647.appspot.com",
  messagingSenderId: "192553261783",
  appId: "1:192553261783:web:966fe946319a625dc4ee92",
  measurementId: "G-25NPXDP872"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };