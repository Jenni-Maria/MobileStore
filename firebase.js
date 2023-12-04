import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "AUTHDOMAIN",
  projectId: "PROJECT ID",
  storageBucket: "YOUR STORAGEBUCKET",
  messagingSenderId: "MESSAGING SENDER ID",
  appId: "APP ID"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth, signInWithEmailAndPassword };