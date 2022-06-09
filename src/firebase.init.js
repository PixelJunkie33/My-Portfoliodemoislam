// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYa2Dgp3oEPka0B2Eq-QR4vOLcm_i5q2Y",
  authDomain: "my-portfolio-ee1d0.firebaseapp.com",
  projectId: "my-portfolio-ee1d0",
  storageBucket: "my-portfolio-ee1d0.appspot.com",
  messagingSenderId: "623453841921",
  appId: "1:623453841921:web:ee4f9df5ab06a31a81ee00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth