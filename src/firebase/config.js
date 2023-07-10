import firebase from "firebase";
import "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDUxA2MzaNU9HdGx8iEhEBGkptvIBucs-o",
    authDomain: "aliexpress-eed79.firebaseapp.com",
    projectId: "aliexpress-eed79",
    storageBucket: "aliexpress-eed79.appspot.com",
    messagingSenderId: "700413611821",
    appId: "1:700413611821:web:981fc514c5013a3b21cda4",
    measurementId: "G-SN8H0W5BEP"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider, backend }