import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyCr3v415EW0mzt31zou7NV-hCCPdhqhh7Y",
  authDomain: "zeus-b3ad2.firebaseapp.com",
  projectId: "zeus-b3ad2",
  storageBucket: "zeus-b3ad2.appspot.com",
  messagingSenderId: "302459285782",
  appId: "1:302459285782:web:71c913393d041cc13aa037"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }