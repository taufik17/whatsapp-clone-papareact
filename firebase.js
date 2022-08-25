import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ6y-g3Fd0nA8uJybvoQZi4GNULrbYLFI",
  authDomain: "fikschat.firebaseapp.com",
  projectId: "fikschat",
  storageBucket: "fikschat.appspot.com",
  messagingSenderId: "847970431388",
  appId: "1:847970431388:web:b786d08791775a1f2c9859",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
