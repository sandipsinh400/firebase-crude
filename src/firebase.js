// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsAbHXceTyaKQVk8H1-aeNMqpGcHE0uv0",
  authDomain: "fir-data-91495.firebaseapp.com",
  projectId: "fir-data-91495",
  storageBucket: "fir-data-91495.appspot.com",
  messagingSenderId: "213767067368",
  appId: "1:213767067368:web:b2463fcc3db0bf42ba9b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db