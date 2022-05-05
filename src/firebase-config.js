import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBbvf2Inrdfqv3QQAzSLaa1sRGK4yRTb-U",
    authDomain: "fir-react-crud-11b0e.firebaseapp.com",
    projectId: "fir-react-crud-11b0e",
    storageBucket: "fir-react-crud-11b0e.appspot.com",
    messagingSenderId: "716278407534",
    appId: "1:716278407534:web:d0cb1d59df03a7ad84a17f",
    measurementId: "G-M76JTYZXTH"
  };

  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)