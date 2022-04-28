
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAwAbcmS2YizmZPdSAxs7enaOAKrwyzUcQ",
  authDomain: "ecomm-challenge-dd30c.firebaseapp.com",
  projectId: "ecomm-challenge-dd30c",
  storageBucket: "ecomm-challenge-dd30c.appspot.com",
  messagingSenderId: "288241077601",
  appId: "1:288241077601:web:97cc0a948eec825eaa4920",
  measurementId: "G-BGRLWJ5M51"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};