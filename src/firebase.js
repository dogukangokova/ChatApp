import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv9HGr3wOyXJgVhilOE4A_z2tCAAtERyc",
  authDomain: "chatapp-60e3c.firebaseapp.com",
  projectId: "chatapp-60e3c",
  storageBucket: "chatapp-60e3c.appspot.com",
  messagingSenderId: "1059459707766",
  appId: "1:1059459707766:web:5f2f16dddfd3e1de8ac057"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()