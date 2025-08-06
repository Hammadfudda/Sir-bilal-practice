// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqQI2C6eqbQW2s3AYuFG7mmNq-MRAlGUY",
  authDomain: "myproject-51fd7.firebaseapp.com",
  databaseURL: "https://myproject-51fd7-default-rtdb.firebaseio.com",
  projectId: "myproject-51fd7",
  storageBucket: "myproject-51fd7.appspot.com",
  messagingSenderId: "797837942304",
  appId: "1:797837942304:web:97950a056bff9b3569a645"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

let loginLink = document.getElementById("loginLink");
let uploadLink = document.getElementById("uploadLink");
let signupLink = document.getElementById("signupLink");
let logoutBtn = document.getElementById("logoutBtn");

function init() {
  let userObj = localStorage.getItem("user");
  userObj = JSON.parse(userObj);
console.log(userObj)
  if (userObj) {
    loginLink.style.display = "none";
    signupLink.style.display = "none";
    if (userObj.userType === "user") {
      uploadLink.style.display = "none";
    }
    logoutBtn.className =
      "text-white mx-4 inline-block bg-blue-500 p-2 rounded";
  }
}
init();

window.logout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("users");
      init();
    })
    .catch((err) => {
      alert(err.message);
    });
};
