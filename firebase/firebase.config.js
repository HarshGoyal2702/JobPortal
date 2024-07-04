// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDArXGIAqs68jWIVH1DKwGS1rhyl5-0Cxo",
  authDomain: "internpath-demo.firebaseapp.com",
  projectId: "internpath-demo",
  storageBucket: "internpath-demo.appspot.com",
  messagingSenderId: "704791681409",
  appId: "1:704791681409:web:5e681db5b530ee6ccbb080",
  measurementId: "G-0B779RM4FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;