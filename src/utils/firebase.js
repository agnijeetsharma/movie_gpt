// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLDzdfo6KSQ3GnH1qC8FFafBi45eOZizw",
  authDomain: "moviegpt-55cd0.firebaseapp.com",
  projectId: "moviegpt-55cd0",
  storageBucket: "moviegpt-55cd0.appspot.com",
  messagingSenderId: "796320536281",
  appId: "1:796320536281:web:a5b6eaf36d99cbd16650c8",
  measurementId: "G-0KW539W5DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();