import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1SztnsHbHVlN7d9QH5C-3EbPcsACWWLc",
    authDomain: "clone-30f63.firebaseapp.com",
    databaseURL: "https://clone-30f63.firebaseio.com",
    projectId: "clone-30f63",
    storageBucket: "clone-30f63.appspot.com",
    messagingSenderId: "697404327027",
    appId: "1:697404327027:web:4c181cb3687ad52b5f5606",
    measurementId: "G-9BLQSS8PW4"
})

const auth = firebase.auth();

export { auth };