import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDzvBr38BVKb_-Em5KiLj-xRAmJG0lafM",
  authDomain: "slack-clone-1fe77.firebaseapp.com",
  projectId: "slack-clone-1fe77",
  storageBucket: "slack-clone-1fe77.appspot.com",
  messagingSenderId: "910259388232",
  appId: "1:910259388232:web:cbc10616171871951b3d7d",
  measurementId: "G-HNQQB2TW2K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// to connect to the db
const db = firebaseApp.firestore();
//export db so we can use it

// sign in up
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

export default db;
