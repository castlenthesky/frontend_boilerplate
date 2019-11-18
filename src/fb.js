import 'firebase/firestore';

const firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: process.env.FIREBASEKEY,
  authDomain: process.env.FIREBASEDOM,
  databaseURL: process.env.FIREBASEURL,
  projectId: 'creative-deviant-dev',
  storageBucket: 'creative-deviant-dev.appspot.com',
  messagingSenderId: '221291604694',
  appId: process.env.FIREBASEAPP,
  measurementId: 'G-7XFRJTT2QE',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;
