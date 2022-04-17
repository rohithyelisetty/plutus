import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp0U1pdcwjYUI7q-v8So9zGqVR7spC_2U",
  authDomain: "plutus-c0e90.firebaseapp.com",
  projectId: "plutus-c0e90",
  storageBucket: "plutus-c0e90.appspot.com",
  messagingSenderId: "921078766196",
  appId: "1:921078766196:web:0a53afbdd1e48d680b4f21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
