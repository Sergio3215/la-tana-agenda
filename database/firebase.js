import firebase from "firebase/app";

import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZj6Rl_p4wFyyfdFgVQCbzsRXvJNCPnRs",
  authDomain: "la-tana-agenda.firebaseapp.com",
  projectId: "la-tana-agenda",
  storageBucket: "la-tana-agenda.appspot.com",
  messagingSenderId: "809088520820",
  appId: "1:809088520820:web:453b864429cba1bb13f721"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db  = firebase.firestore();

  export default {
      firebase,
      db
  };