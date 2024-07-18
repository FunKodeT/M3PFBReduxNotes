// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBxqbHNx77d8BO4s3LSiL74zINOjmOe1Jg',
	authDomain: 'pfbreduxnotes.firebaseapp.com',
	projectId: 'pfbreduxnotes',
	storageBucket: 'pfbreduxnotes.appspot.com',
	messagingSenderId: '128850804180',
	appId: '1:128850804180:web:a6d0a33e7a561c7b082a41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};

/* let trash1 = {
// IMPORT THE FUNCTIONS YOU NEED FROM THE SDKS YOU NEED
// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
// // TODO: ADD SDKS FOR FIREBASE PRODUCTS THAT YOU WANT TO USE
// // https://firebase.google.com/docs/web/setup#available-libraries

// // YOUR WEB APP'S FIREBASE CONFIGURATION
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCiAFBMAEiSfVp-2h1f_ovL6CHpduGhCFE',
// 	authDomain: 'fir-note-nextjs.firebaseapp.com',
// 	projectId: 'fire-note-nextjs',
// 	storageBucket: 'fir-note-nextjs.appspot.com',
// 	messagingSenderId: '779532319317',
// 	appId: '1:779532319317:web:325e56f7953036a6e7f2dc',
// };

// // INITIALIZE FIREBASE
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// export {auth, db};
} */
