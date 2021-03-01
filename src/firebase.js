import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA13tWxlhjLkGnYasgRrLdpaYYtMm67gEg",
  authDomain: "react-tasks-app-55240.firebaseapp.com",
  projectId: "react-tasks-app-55240",
  storageBucket: "react-tasks-app-55240.appspot.com",
  messagingSenderId: "1027117815698",
  appId: "1:1027117815698:web:6a66006ac13faf84c8134b",
  measurementId: "G-8ZNFQED0HE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;