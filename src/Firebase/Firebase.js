import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBMQn1D9pXArK1hasPVCs30g9_JFj5bBgU",
    authDomain: "miproyectoreactcoder.firebaseapp.com",
    projectId: "miproyectoreactcoder",
    storageBucket: "miproyectoreactcoder.appspot.com",
    messagingSenderId: "510049152546",
    appId: "1:510049152546:web:30543b713c486105c3247b"

  };


  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;
  
  export const getFirestore = () => firebase.firestore(app);