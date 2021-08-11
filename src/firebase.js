import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHTmh2j2ui3SCTv4ZptVazsJMLyyrJ0P4",
  authDomain: "slack-clone-e027f.firebaseapp.com",
  projectId: "slack-clone-e027f",
  storageBucket: "slack-clone-e027f.appspot.com",
  messagingSenderId: "1057323836744",
  appId: "1:1057323836744:web:7f6500e17a28239fb2ff7d",
  measurementId: "G-97LZBX86T9"
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
