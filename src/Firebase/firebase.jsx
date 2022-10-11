import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCP8_7iuMlvF_LOh-WAyKkHgW51F3jSVWo",
    authDomain: "react-coderhouse-c3beb.firebaseapp.com",
    projectId: "react-coderhouse-c3beb",
    storageBucket: "react-coderhouse-c3beb.appspot.com",
    messagingSenderId: "261140571093",
    appId: "1:261140571093:web:ced86e2b47aa49eff7535c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)