// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjiyuVoyDWt1MoG7nJVRqpANQ42xqIyQ",
  authDomain: "leean-react-crud.firebaseapp.com",
  projectId: "leean-react-crud",
  storageBucket: "leean-react-crud.appspot.com",
  messagingSenderId: "346689639190",
  appId: "1:346689639190:web:2c09570a5cff8bf970b637",
  measurementId: "G-7JSCKM3X7E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
