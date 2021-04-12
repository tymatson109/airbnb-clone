import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBDiGlkcDdZUts9NLigkUt8HSG7I8u6fYM",
    authDomain: "airbnb-clone-5e4aa.firebaseapp.com",
    projectId: "airbnb-clone-5e4aa",
    storageBucket: "airbnb-clone-5e4aa.appspot.com",
    messagingSenderId: "338404826661",
    appId: "1:338404826661:web:25747d36b5ee897f55e9cc",
    measurementId: "G-SRSD12N60X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;