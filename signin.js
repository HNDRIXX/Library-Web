// import { getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

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

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

// function signin(e){
//     e.preventDefault();

//     var obj = {
//         email: email.value,
//         password: password.value
//     };
// }

// signInWithEmailAndPassword(auth, obj.email, obj.password)
// .then(function(success)){

// }

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(){
    
    email = document.getElementVal("email")
    password = document.getElementVal("password")

    auth.signInWithEmailAndPassword(email, password).
    then(function(){
        var user = auth.currentUser

        var databaseRef = database().ref("Users")

        databaseRef.child(user.uid)

        alert('WOW');
    })
    .catch(function(){
        alert("'FAILED'")
    })
}
