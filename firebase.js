// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlZWSqYV9g9mWjUh1gE5LgmmfXOBy-I5I",
  authDomain: "fireproj-3b453.firebaseapp.com",
  projectId: "fireproj-3b453",
  storageBucket: "fireproj-3b453.appspot.com",
  messagingSenderId: "414910703034",
  appId: "1:414910703034:web:38e93cbcc0a230e82de983",
  measurementId: "G-6HDKLQ6SFP"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };