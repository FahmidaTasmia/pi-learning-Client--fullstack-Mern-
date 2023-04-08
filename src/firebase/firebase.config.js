// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsyJEIRmz7zgOgL6KGUf6TaqVOm6ZmIIg",
  authDomain: "pilearning-client.firebaseapp.com",
  projectId: "pilearning-client",
  storageBucket: "pilearning-client.appspot.com",
  messagingSenderId: "976860105843",
  appId: "1:976860105843:web:8500f94792b06f5ba06e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;