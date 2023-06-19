// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC_xjRjbSySJ16vxldnU2DnJIc0jaMcJdE",
//   authDomain: "masotra-bd2b6.firebaseapp.com",
//   projectId: "masotra-bd2b6",
//   storageBucket: "masotra-bd2b6.appspot.com",
//   messagingSenderId: "807141024767",
//   appId: "1:807141024767:web:3363b74a7a709ab1d1fdca"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getFirestore,collection,addDoc,getDocs,updateDoc, doc,getDoc} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_xjRjbSySJ16vxldnU2DnJIc0jaMcJdE",
    authDomain: "masotra-bd2b6.firebaseapp.com",
    projectId: "masotra-bd2b6",
    storageBucket: "masotra-bd2b6.appspot.com",
    messagingSenderId: "807141024767",
    appId: "1:807141024767:web:3363b74a7a709ab1d1fdca",
    // measurementId: "G-NB2646C4EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);

//mes collections
const userCollection=collection(db, 'users');



export {db, auth,createUserWithEmailAndPassword,addDoc,signInWithEmailAndPassword,getDocs,updateDoc, doc, getDoc , collection , userCollection}

