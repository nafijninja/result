import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8cV4198a3DAnVz7e3BWncjpfT9CWuYu0",
    authDomain: "result-web-nafij.firebaseapp.com",
    databaseURL: "https://result-web-nafij-default-rtdb.firebaseio.com/",
    projectId: "result-web-nafij",
    storageBucket: "result-web-nafij.appspot.com",
    messagingSenderId: "162102341594",
    appId: "1:162102341594:web:052ba5b0b42a52545d5ae3",
    measurementId: "G-XRKCH5QLND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export Firebase services
export { db, auth, provider, signInWithPopup, signOut };
