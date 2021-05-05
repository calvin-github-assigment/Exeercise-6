import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyB8NM-ZCn4AFQM8oUiXJ0WtvzqG0RcwbY8",
    authDomain: "exercise-63d26.firebaseapp.com",
    projectId: "exercise-63d26",
    storageBucket: "exercise-63d26.appspot.com",
    messagingSenderId: "337859571561",
    appId: "1:337859571561:web:4bb3802179f2ed2c0b17f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;