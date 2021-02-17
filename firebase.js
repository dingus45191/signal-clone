import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7WqLJbxyj_RUh0mcWU01gkjlMO5QXUNU",
  authDomain: "signal-clone-f7f1e.firebaseapp.com",
  projectId: "signal-clone-f7f1e",
  storageBucket: "signal-clone-f7f1e.appspot.com",
  messagingSenderId: "721803897243",
  appId: "1:721803897243:web:3cd342ef08bc3edc15993e",
  measurementId: "G-REVQ3YDYT8",
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const db = app.firestore()
const auth= firebase.auth();

export {db, auth}
