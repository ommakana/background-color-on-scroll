import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAonNqR3ONVVKnOYaeJmR8WDGR_qaTsaFs",
    authDomain: "om-makana-e26a7.firebaseapp.com",
    databaseURL: "https://om-makana-e26a7.firebaseio.com",
    projectId: "om-makana-e26a7",
    storageBucket: "om-makana-e26a7.appspot.com",
    messagingSenderId: "555825829866",
    appId: "1:555825829866:web:53a31085676e920f768493",
    measurementId: "G-86JLW1L1P1"
  };

  firebase.initializeApp(firebaseConfig);
  export const firebaseAnalytics = firebase.analytics();