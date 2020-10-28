import firebase from 'firebase';

const firebaseConfig = {
     apiKey: "AIzaSyDoN1VGISAWeiZKHurrQOK2_vJsy1e_dLQ",
     authDomain: "tinder-clone-aeed0.firebaseapp.com",
     databaseURL: "https://tinder-clone-aeed0.firebaseio.com",
     projectId: "tinder-clone-aeed0",
     storageBucket: "tinder-clone-aeed0.appspot.com",
     messagingSenderId: "181702377683",
     appId: "1:181702377683:web:f0de8569ce26bd9701d426",
     measurementId: "G-WRCRWS8YGP"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;