const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDFMk5OX_jVvuRHRgqC1IzHv66ebdrUIas",
    authDomain: "fir-emulator-b0345.firebaseapp.com",
    databaseURL: "https://fir-emulator-b0345-default-rtdb.firebaseio.com",
    projectId: "fir-emulator-b0345",
    storageBucket: "fir-emulator-b0345.appspot.com",
    messagingSenderId: "633445818093",
    appId: "1:633445818093:web:76dfbabed1e6c2b06f36e4",
    measurementId: "G-T5TT868KMN"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = db;
