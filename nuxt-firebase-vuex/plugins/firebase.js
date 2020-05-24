
import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCy8Szba429pdBMrHsSY_yV5KbsGcnV_xs",
  authDomain: "fir-prototype-23425.firebaseapp.com",
  databaseURL: "https://fir-prototype-23425.firebaseio.com",
  projectId: "fir-prototype-23425",
  storageBucket: "fir-prototype-23425.appspot.com",
  messagingSenderId: "378648175256",
  appId: "1:378648175256:web:c9f8a72234eec0eb75a6ed",
  measurementId: "G-2Z03X45KLX"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase



