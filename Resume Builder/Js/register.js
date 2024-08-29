// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCap3E6PZLip9wyJS8CHGmAFbFh5oBSBkE",
  authDomain: "login-with-firebase-data-554a6.firebaseapp.com",
  databaseURL: "https://login-with-firebase-data-554a6-default-rtdb.firebaseio.com",
  projectId: "login-with-firebase-data-554a6",
  storageBucket: "login-with-firebase-data-554a6.appspot.com",
  messagingSenderId: "229327465146",
  appId: "1:229327465146:web:d5b8d3113f6b88811ef083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
    event.preventDefault();

    // Retrieve the input values inside the event listener
    const fullName = document.getElementById('floatingName').value;
    const email = document.getElementById('floatingEmail').value;
    const password = document.getElementById('floatingPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert("Account created successfully!");

            // Clear the input fields after successful registration
            document.getElementById('floatingName').value = '';
            document.getElementById('floatingEmail').value = '';
            document.getElementById('floatingPassword').value = '';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Handle invalid email format
            if (errorCode === 'auth/invalid-email') {
                alert("Invalid email format. Please enter a valid email address.");
            } else {
                alert(errorMessage); // Handle other errors
            }
        });
});
