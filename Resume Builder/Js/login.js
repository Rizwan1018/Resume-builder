// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Retrieve the input values inside the event listener
    const email = document.getElementById('floatingEmail').value;
    const password = document.getElementById('floatingPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
           
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            }).then(() => {
                // Redirect to the create resume page after the alert is closed
                window.location.href = "createresume.html"; // Replace with your actual create resume page URL
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                title: "Error!",
                text: errorMessage,
                icon: "error"
            });
            // Handle errors such as invalid email or wrong password
            /* if (errorCode === 'auth/wrong-password') {
                alert("Incorrect password. Please try again.");
            } else if (errorCode === 'auth/user-not-found') {
                alert("No account found with this email. Please sign up first.");
            } else if (errorCode === 'auth/invalid-email') {
                alert("Invalid email format. Please enter a valid email address.");
            } else {
                alert(errorMessage); // Handle other errors
            } */
        });
});
