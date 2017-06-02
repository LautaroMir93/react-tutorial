import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZ9QOUnJH14cI6pOIKnVwgGk4Hm3jRp-I",
  authDomain: "goal-coach-a28b0.firebaseapp.com",
  databaseURL: "https://goal-coach-a28b0.firebaseio.com",
  projectId: "goal-coach-a28b0",
  storageBucket: "goal-coach-a28b0.appspot.com",
  messagingSenderId: "209651715053"
};

export const firebaseApp = firebase.initializeApp(config);
