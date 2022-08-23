import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZ6y-g3Fd0nA8uJybvoQZi4GNULrbYLFI",
  authDomain: "fikschat.firebaseapp.com",
  projectId: "fikschat",
  storageBucket: "fikschat.appspot.com",
  messagingSenderId: "847970431388",
  appId: "1:847970431388:web:b786d08791775a1f2c9859",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};