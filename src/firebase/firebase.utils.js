import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBCXFeDxzL7wHEInAUwMi39FEti7H21jsg',
  authDomain: 'crwn-db-64522.firebaseapp.com',
  databaseURL: 'https://crwn-db-64522.firebaseio.com',
  projectId: 'crwn-db-64522',
  storageBucket: '',
  messagingSenderId: '999188295249',
  appId: '1:999188295249:web:bf4fce593d228083'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
