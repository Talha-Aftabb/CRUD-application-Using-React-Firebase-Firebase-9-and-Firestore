import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC42LIgzzoC05Aen3hZnYBlfDayyO9ivQo",
  authDomain: "crud-application-ef638.firebaseapp.com",
  projectId: "crud-application-ef638",
  storageBucket: "crud-application-ef638.appspot.com",
  messagingSenderId: "965140751318",
  appId: "1:965140751318:web:8b7221c3ecdba844f4ba77",
  measurementId: "G-LTEDX0WM2M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)  