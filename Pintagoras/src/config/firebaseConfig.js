
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" // trae la base de datos a la app

const firebaseConfig = {
  apiKey: "AIzaSyDo4z2kKFKhX_iUjbEUirVNM8oV5G6-LlQ",
  authDomain: "pintagoras-894f5.firebaseapp.com",
  projectId: "pintagoras-894f5",
  storageBucket: "pintagoras-894f5.appspot.com",
  messagingSenderId: "140077391207",
  appId: "1:140077391207:web:637bfa11322ef769b063c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportamos la base de datos a toda la app
export const db = getFirestore(app)