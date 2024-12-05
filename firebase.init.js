
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0yO_D-qpRohMRUIeOThL0maD-h4htUws",
  authDomain: "visa-navigator-portal-5d31d.firebaseapp.com",
  projectId: "visa-navigator-portal-5d31d",
  storageBucket: "visa-navigator-portal-5d31d.firebasestorage.app",
  messagingSenderId: "420786336602",
  appId: "1:420786336602:web:973ea98bf487ab355fb963",
  measurementId: "G-LKX8P4RKJY"
};


const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)