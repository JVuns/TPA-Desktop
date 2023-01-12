// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDwtxUHCNku-yDPD1LX5YP5T-OvInGsrM",
  authDomain: "tpa-dekstop.firebaseapp.com",
  projectId: "tpa-dekstop",
  storageBucket: "tpa-dekstop.appspot.com",
  messagingSenderId: "1082380316657",
  appId: "1:1082380316657:web:32d4cd133d6dfa276ade50",
  measurementId: "G-F6619QH4HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export default db