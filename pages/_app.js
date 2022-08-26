import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  const users = collection(db, "users");

  const setDocument = async (user) => {
    await setDoc(
      doc(users, user.uid),
      {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      },
      { merge: true }
    );
  };

  useEffect(() => {
    if (user) {
      setDocument(user);
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
