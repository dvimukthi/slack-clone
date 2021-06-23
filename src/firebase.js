import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSWyCrQA1dL632qgqrifghJhUJVxwSzqU",
  authDomain: "slack-clone-42675.firebaseapp.com",
  projectId: "slack-clone-42675",
  storageBucket: "slack-clone-42675.appspot.com",
  messagingSenderId: "133057234784",
  appId: "1:133057234784:web:1e2fbe65009e3fc6968005",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
