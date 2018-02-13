/* eslint-disable */
const https = require('https');
const firebase = require('firebase');

const firebaseConfig = require('../config/firebase.json');

const PARKING_URL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';
const FIREBASE_USER = 'demo@inthepocket.com';
const FIREBASE_PASS = 'firebase';


const waitAndRetry = () => {
  console.log('Wait 10s');
  // Wait 10s
  setTimeout(updateParkings, 10000);
};

const updateParkings = () => {
  https.get(PARKING_URL, (res) => {
    let body = '';
    res.on('data', (data) => {
      body += data;
    });
    res.on('end', () => {
      const parkings = JSON.parse(body);
      console.log('Fetched new data, now updating Firebase');
      firebase.database().ref().set({
        parkings: parkings,
      })
        .then(() => {
          console.log('Updates have been pushed');
          waitAndRetry();
        })
        .catch((err) => {
          console.error('ERROR while updating firebase');
          console.error(err);
        });
    });
  });
};

console.log('Starting firebase');
firebase.initializeApp(firebaseConfig);

console.log('Authenticate to firebase');
firebase.auth().signInWithEmailAndPassword(FIREBASE_USER, FIREBASE_PASS)
  .then((res) => {
    console.log('Authenticated');
    updateParkings();
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      console.error('Wrong password.');
    } else {
      console.error(errorMessage);
    }
    console.error(error);
});
