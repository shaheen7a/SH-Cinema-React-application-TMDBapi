import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhyIeKXuSmdhtGkJwNmRz6WwEItzbWpRY",
  authDomain: "netflix-clone-9d325.firebaseapp.com",
  projectId: "netflix-clone-9d325",
  storageBucket: "netflix-clone-9d325.appspot.com",
  messagingSenderId: "576688848292",
  appId: "1:576688848292:web:00ff75f19a5d28598d9531"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;