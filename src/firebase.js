import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM2EWUmh0AcFrY-QXQTaGqpWFFni7s2SU",
  authDomain: "netflix-clone-7f79d.firebaseapp.com",
  projectId: "netflix-clone-7f79d",
  storageBucket: "netflix-clone-7f79d.appspot.com",
  messagingSenderId: "77333645609",
  appId: "1:77333645609:web:9f21e52a8643e32b994f38",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
