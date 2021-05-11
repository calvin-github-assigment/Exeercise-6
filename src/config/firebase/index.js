import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDeDQ3c8wp_YrqnAyBvLXMF0zIgpIPLVdQ",
  authDomain: "finalprojek-8f3b9.firebaseapp.com",
  projectId: "finalprojek-8f3b9",
  storageBucket: "finalprojek-8f3b9.appspot.com",
  messagingSenderId: "255854804314",
  appId: "1:255854804314:web:183d5b7d51b23f9e644763"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase;