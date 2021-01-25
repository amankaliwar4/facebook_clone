// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZ_2vAS_0wo4frrd6zhhUMiNYL0pZj7_E",
    authDomain: "facebook-clone-db977.firebaseapp.com",
    projectId: "facebook-clone-db977",
    storageBucket: "facebook-clone-db977.appspot.com",
    messagingSenderId: "605105149849",
    appId: "1:605105149849:web:2d68628f6202f3c85be508",
    measurementId: "G-EDJZ8C0Z1F"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;