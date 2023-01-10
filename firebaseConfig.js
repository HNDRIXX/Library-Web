
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUM36WyNUQkPKMxs-aONokQzzB6Jf_Mnw",
    authDomain: "libraryapp-a10b1.firebaseapp.com",
    databaseURL: "https://libraryapp-a10b1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "libraryapp-a10b1",
    storageBucket: "libraryapp-a10b1.appspot.com",
    messagingSenderId: "773046714159",
    appId: "1:773046714159:web:546d36a05ba90d3cf72bda",
    measurementId: "G-DGWRLS52QS"
  };

  // var { initializeApp } = require('https://www.gstatic.com/firebase.js/9.15.0/firebase-app.js')

  const app = initializeApp(firebaseConfig);

  var formDB = firebase.database().ref("Web App");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getElementVal('name');
    var email = getElementVal('email');

    // saveMessage(name, email);
    // document.getElementById('contactForm').reset();

    console.log(name, email);
    saveInput(name,email);
  }

  const saveInput = (name, email) => {
    var newContactForm = formDB.push();

    newContactForm.set({
      name: name,
      email: email,
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }