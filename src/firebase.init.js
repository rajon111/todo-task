// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaWslcHrestNIkYNml7CXJKGTezvXaDl8",
  authDomain: "todo-task-8c001.firebaseapp.com",
  projectId: "todo-task-8c001",
  storageBucket: "todo-task-8c001.appspot.com",
  messagingSenderId: "1065717960582",
  appId: "1:1065717960582:web:ac8ff331fb64c527e9e607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;