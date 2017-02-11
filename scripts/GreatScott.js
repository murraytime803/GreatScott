window.GreatScott = window.GreatScott || {};

// Initialize Firebase
GreatScott.firebaseConfig = 
{
    apiKey: "AIzaSyCdD4Isc3AmF6CopS5gjYAW6ObV6oeuhQA",
    authDomain: "stepahnies-present.firebaseapp.com",
    databaseURL: "https://stepahnies-present.firebaseio.com",
    storageBucket: "stepahnies-present.appspot.com",
    messagingSenderId: "123421287321"
};

GreatScott.firebase = firebase.initializeApp(GreatScott.firebaseConfig);
GreatScott.database = GreatScott.firebase.database();