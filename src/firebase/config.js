import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAZpUyQnabmUwxC1Qb7-n9rGmkx-_7fMmk",
    authDomain: "firegram-4d019.firebaseapp.com",
    projectId: "firegram-4d019",
    storageBucket: "firegram-4d019.appspot.com",
    messagingSenderId: "104657731972",
    appId: "1:104657731972:web:d2c3cd59939b414c295dd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //stores and acts as a conduit for anytime we want to work w/backend
  const projectStorage = firebase.storage();
  const  projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export{
      projectStorage, projectFirestore, timestamp
  }