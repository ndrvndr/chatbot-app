import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYUGQUNc87scY_aLah_wz2XghQzLNHy1g",
  authDomain: "chatbot-app-cd8a4.firebaseapp.com",
  databaseURL:
    "https://chatbot-app-cd8a4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatbot-app-cd8a4",
  storageBucket: "chatbot-app-cd8a4.appspot.com",
  messagingSenderId: "1076241094167",
  appId: "1:1076241094167:web:d19730aa27ed07cb33ee52",
  measurementId: "G-RZFM19EEG1",
};

firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;
