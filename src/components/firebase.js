import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3rMmkICGmlkR0lsQOUK96ENw14xuhWI8",
  authDomain: "linkedinclone81.firebaseapp.com",
  projectId: "linkedinclone81",
  storageBucket: "linkedinclone81.appspot.com",
  messagingSenderId: "527528235228",
  appId: "1:527528235228:web:3e9d1dee467d23da4aa419",
  measurementId: "G-XDE87141RM",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;