// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc7EcUlLV-i9A5gTh5uebJ3hgZw2Sqo64",
  authDomain: "netflixfirebase.firebaseapp.com",
  databaseURL: "https://netflixfirebase-default-rtdb.firebaseio.com",
  projectId: "netflixfirebase",
  storageBucket: "netflixfirebase.appspot.com",
  messagingSenderId: "625634146832",
  appId: "1:625634146832:web:630afc2669e2973771a895",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
