import * as firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyAy28yjqIAg4u9bYGhmDAm04VDdGaClhqE",
    authDomain: "testfirebase-35e3b.firebaseapp.com",
    databaseURL: "https://testfirebase-35e3b.firebaseio.com",
    projectId: "testfirebase-35e3b",
    storageBucket: "testfirebase-35e3b.appspot.com",
    messagingSenderId: "424982790346"
  };
 export const firebaseApp = firebase.initializeApp(config);