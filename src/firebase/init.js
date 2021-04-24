import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyA8aht0-cB-ujzez3ywCKilc_qjAgS-7EU",
    authDomain: "chatwithme-23c3e.firebaseapp.com",
    databaseURL: "https://chatwithme-23c3e.firebaseio.com",
    projectId: "chatwithme-23c3e",
    storageBucket: "chatwithme-23c3e.appspot.com",
    messagingSenderId: "400458428564"
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()