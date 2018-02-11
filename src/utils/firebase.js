import firebase from 'firebase';
import { linkStoreWithPath } from 'firebase-redux';

import firebaseConfig from '../../config/firebase.json';
import { parkingsChanged } from '../actions';

const firebasePath = '/';
let unlinkFirebase = () => {};

export const startFirebase = (reduxStore) => {
  firebase.initializeApp(firebaseConfig);
  const linkFirebase = linkStoreWithPath(firebasePath, parkingsChanged);
  unlinkFirebase = linkFirebase(firebase.database(), reduxStore);
};

export const stopFirebase = () => {
  unlinkFirebase();
  unlinkFirebase = () => {};
};
