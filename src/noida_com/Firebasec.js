// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBs2AI8FPAOiOYJUBzuGePkBBuh39OdpIQ",
  authDomain: "dating-site-46dde.firebaseapp.com",
  projectId: "dating-site-46dde",
  storageBucket: "dating-site-46dde.appspot.com",
  messagingSenderId: "13710449564",
  appId: "1:13710449564:web:401959871d7f07cd894659",
  measurementId: "G-E0W98N9M22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default aap;
const analytics = getAnalytics(app);