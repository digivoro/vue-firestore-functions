import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWgbOa-sQLhbAUVJvoT-CEqxREJsEL2QI",
  authDomain: "crud-rest-c9ba3.firebaseapp.com",
  databaseURL: "https://crud-rest-c9ba3.firebaseio.com",
  projectId: "crud-rest-c9ba3",
  storageBucket: "crud-rest-c9ba3.appspot.com",
  messagingSenderId: "210753584328",
  appId: "1:210753584328:web:09d52abfc767481c82f9fd",
  measurementId: "G-SXT4MF3BZM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
