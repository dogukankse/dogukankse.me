import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();
