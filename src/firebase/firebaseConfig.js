import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD1DjMNvq0x1iZYjPxY1p2HF2WMMtltFDc",
  authDomain: "counter-ibr.firebaseapp.com",
  projectId: "counter-ibr",
  storageBucket: "counter-ibr.appspot.com",
  messagingSenderId: "715686682594",
  appId: "1:715686682594:web:b69e1fe4aa9808d96b23bb"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth()
