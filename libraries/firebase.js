import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDiefICq1CmiFx2TJacHGYLPQoXt60O8UM",
  authDomain: "next-firebase-30661.firebaseapp.com",
  projectId: "next-firebase-30661",
  storageBucket: "next-firebase-30661.appspot.com",
  messagingSenderId: "974501837776",
  appId: "1:974501837776:web:749757e60e16d06bb997d5",
  measurementId: "G-F031NXDRLX"
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();