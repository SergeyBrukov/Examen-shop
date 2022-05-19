import { useEffect, useState } from "react";
import firebase from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {getDatabase} from 'firebase/database'

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYv-0soD2STbiOwcmfMskD1uioGBwSIA4",
  authDomain: "registation-544e1.firebaseapp.com",
  projectId: "registation-544e1",
  storageBucket: "registation-544e1.appspot.com",
  messagingSenderId: "968252660997",
  appId: "1:968252660997:web:b5bbdb2fcf7f68f8f9ab6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export const db = getDatabase(app);

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email)
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unSub;
  }, []);
  return currentUser;
}

// Google authentication

export function signInGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export default firebase;