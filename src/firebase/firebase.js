import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf-XtzyBiztMBAEDVn61IXFVwNXmplyBw",
  authDomain: "learning-management-syst-bf947.firebaseapp.com",
  projectId: "learning-management-syst-bf947",
  storageBucket: "learning-management-syst-bf947.appspot.com",
  messagingSenderId: "995294689816",
  appId: "1:995294689816:web:f99c1437e6639294b1a16d",
  measurementId: "G-07V56Q654H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase Name", app.name);

const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, analytics, storage, firestore };
