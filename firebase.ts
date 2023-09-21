import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2LRpuNzqOY26RsdSSPnfag1ARfm01eHI",
  authDomain: "photo-plus-d468d.firebaseapp.com",
  projectId: "photo-plus-d468d",
  storageBucket: "photo-plus-d468d.appspot.com",
  messagingSenderId: "976478062682",
  appId: "1:976478062682:web:62fc3a1443c769e7233063",
  measurementId: "G-27R4D1DGX3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);