import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyAEc7pjEtmDLHIXxdB2xDlnILm-EvmSXgU",
  authDomain: "auth-development-690fe.firebaseapp.com",
  projectId: "auth-development-690fe",
  storageBucket: "auth-development-690fe.appspot.com",
  messagingSenderId: "1079093290227",
  appId: "1:1079093290227:web:5743856da3418ef0120386",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
