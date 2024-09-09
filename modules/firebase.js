import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgEyHB82jI-OXn89kJIuUozLSJtPLLgKE",
    authDomain: "twitter-landing.firebaseapp.com",
    projectId: "twitter-landing",
    storageBucket: "twitter-landing.appspot.com",
    messagingSenderId: "647254641937",
    appId: "1:647254641937:web:11026f2df89747d09cd0b0",
    measurementId: "G-XBMCNGMEK6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }
