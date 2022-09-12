import React from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// const FirebaseConfig = () => {
    
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    // apiKey: "AIzaSyD3VYpViqH7M1-z0kwQfxAivpNXz8DfqOc",
    // authDomain: "new-react-54dd2.firebaseapp.com",
    // projectId: "new-react-54dd2",
    // storageBucket: "new-react-54dd2.appspot.com",
    // messagingSenderId: "446240023891",
    // appId: "1:446240023891:web:6f60d91511727651792da6"


    // apiKey: "AIzaSyAi64ihHWgfDbpSh6TkEDCjU_25vMQ__kg",
    // authDomain: "react-project-4b5db.firebaseapp.com",
    // projectId: "react-project-4b5db",
    // storageBucket: "react-project-4b5db.appspot.com",
    // messagingSenderId: "907946280318",
    // appId: "1:907946280318:web:0de99aec605ac699455f2f",
    // measurementId: "G-7JKF5GWHHM"

    apiKey: "AIzaSyDiOSQXDMG71eK8qlcf0cliS1wrDTNkKQo",
    authDomain: "react-123-b59c1.firebaseapp.com",
    projectId: "react-123-b59c1",
    storageBucket: "react-123-b59c1.appspot.com",
    messagingSenderId: "25979906305",
    appId: "1:25979906305:web:a50c40ce534a4a5d9e9300"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
//   return (
//     <div>Firebase-config</div>
//   )
// }

// export default Firebase-config