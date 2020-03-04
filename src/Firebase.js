import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBVgb9za9UlT7-58SDZqKS7mctTZTBH1kA",
    authDomain: "demovueproject.firebaseapp.com",
    databaseURL: "https://demovueproject.firebaseio.com",
    projectId: "demovueproject",
    storageBucket: "demovueproject.appspot.com",
    messagingSenderId: "255944289688",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;