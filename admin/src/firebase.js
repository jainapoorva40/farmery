// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsGZa8sfGXFUhjwAmppXXYLt9cl0GOS1k",
  authDomain: "farmery-59410.firebaseapp.com",
  projectId: "farmery-59410",
  storageBucket: "farmery-59410.appspot.com",
  messagingSenderId: "260007680586",
  appId: "1:260007680586:web:172ab7eaa3c38c6f9924b3",
  measurementId: "G-B1D1B358BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;