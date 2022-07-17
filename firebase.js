import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA5tJma27sqtZH2E7nGzELTC7FBkjV6UlI",
  authDomain: "trainerfu-bb2c3.firebaseapp.com",
  databaseURL: "https://trainerfu-bb2c3-default-rtdb.firebaseio.com",
  projectId: "trainerfu-bb2c3",
  storageBucket: "trainerfu-bb2c3.appspot.com",
  messagingSenderId: "503718715813",
  appId: "1:503718715813:web:02c820733e19190436084c",
  measurementId: "G-GF58BVQW2T",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
const timestamp = serverTimestamp();

export { db, auth, timestamp };
