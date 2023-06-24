import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDvmfc55t8DR1ss1mfffbNsuxjfPug068g",
  authDomain: "real-chat-7e1df.firebaseapp.com",
  projectId: "real-chat-7e1df",
  storageBucket: "real-chat-7e1df.appspot.com",
  messagingSenderId: "892971381681",
  appId: "1:892971381681:web:f771d3ec9efd5c54c08390"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();