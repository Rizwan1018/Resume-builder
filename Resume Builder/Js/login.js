import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

// Your Firebase configuration
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
const auth = getAuth(app);

// Listen for the form's submit event
document.getElementById('login-container').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    const email = document.getElementById('floatingEmail').value.trim().toLowerCase();
    const password = document.getElementById('floatingPassword').value;

    console.log('Attempting login with email:', email);

    // Attempt to sign in the user
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
            Swal.fire({
                icon: 'success',
                title: 'Welcome back!',
                text: 'Login successful',
            }).then(() => {
                // Redirect to the user's dashboard or homepage
                window.location.href = "createresume.html";
            });
        })
        .catch((error) => {
            // Handle Errors here.
            console.error('Sign-in error:', error);
            const errorCode = error.code;
            const errorMessage = error.message;
            
            if (errorCode === 'auth/user-not-found') {
                Swal.fire({
                    title: 'User Not Found',
                    text: "It seems like you don't have an account. Would you like to register?",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Register',
                    cancelButtonText: 'No, Cancel',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Redirect to the registration page
                        window.location.href = "register.html";
                    }
                });
            } else {
                // Handle other errors
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: `Incorrect Email or Password!`,
                });
            }
        });
});
