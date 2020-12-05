import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9HzKXHc5VHM4IZbr8hKq938mhuS3dhQc",
    authDomain: "whattodo-be503.firebaseapp.com",
    projectId: "whattodo-be503",
    storageBucket: "whattodo-be503.appspot.com",
    messagingSenderId: "39292840297",
    appId: "1:39292840297:web:beed1b9847d07f535a35f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
