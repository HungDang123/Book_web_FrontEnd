import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyrJ7Uzndb5LT9FmODOYy4MBNTOkUbhOg",
    authDomain: "book-app-2099e.firebaseapp.com",
    projectId: "book-app-2099e",
    storageBucket: "book-app-2099e.appspot.com",
    messagingSenderId: "483916917989",
    appId: "1:483916917989:web:82ee157762246c3c83780c",
    measurementId: "G-0452DXC82B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firebase Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

export default initializeApp
export { auth, db }