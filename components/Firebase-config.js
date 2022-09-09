import React from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// const FirebaseConfig = () => {
    
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3VYpViqH7M1-z0kwQfxAivpNXz8DfqOc",
    authDomain: "new-react-54dd2.firebaseapp.com",
    projectId: "new-react-54dd2",
    storageBucket: "new-react-54dd2.appspot.com",
    messagingSenderId: "446240023891",
    appId: "1:446240023891:web:6f60d91511727651792da6"
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