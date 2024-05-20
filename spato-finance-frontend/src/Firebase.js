import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCR3iHJWGqv1CRPinFGwWBsr4grHnugBMA",
  authDomain: "dyuthi-4d2ad.firebaseapp.com",
  projectId: "dyuthi-4d2ad",
  storageBucket: "dyuthi-4d2ad.appspot.com",
  messagingSenderId: "991941995205",
  appId: "1:991941995205:web:05cf91ec47d5776d4adeac",
  measurementId: "G-6W9WG504GF"
});

const db = firebaseConfig.firestore();
const auth = firebaseConfig.auth();
const storage = firebaseConfig.storage();
export { db, auth, storage };
