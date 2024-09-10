import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nFJpR0_EInLHsj7cfO6BNgidU4zqF6s",
  authDomain: "jimswebsite-4aed7.firebaseapp.com",
  projectId: "jimswebsite-4aed7",
  storageBucket: "jimswebsite-4aed7.appspot.com",
  messagingSenderId: "464769659218",
  appId: "1:464769659218:web:6051f5004c67ab77e70a8b",
  measurementId: "G-5SRFF12LQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);