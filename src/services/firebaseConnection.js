
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0EA4B2ZQnvfr5LSjF8IxFdXfT3z9UgOE",
  authDomain: "devlinks-83af7.firebaseapp.com",
  projectId: "devlinks-83af7",
  storageBucket: "devlinks-83af7.appspot.com",
  messagingSenderId: "1046234805269",
  appId: "1:1046234805269:web:564d8dba4847badf6a8a1c",
  measurementId: "G-CY0PJLREDZ"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {db, auth};