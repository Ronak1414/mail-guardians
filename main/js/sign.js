// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Variables to store signup details for verification
let signUpUsernameValue = "";
let signUpPasswordValue = "";

// Sign-Up button click to add the 'sign-up-mode' class
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

// Sign-In button click to remove the 'sign-up-mode' class
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Select input fields in the Sign Up form
const signUpUsername = document.querySelector(".sign-up-form .input-field input[type='text']");
const signUpPassword = document.querySelector(".sign-up-form .input-field input[type='password']");

// Select input fields in the Sign In form
const signInUsername = document.querySelector(".sign-in-form .input-field input[type='text']");
const signInPassword = document.querySelector(".sign-in-form .input-field input[type='password']");

// Add event listener to the Sign Up form's submit button
document.querySelector(".sign-up-form input[type='submit']").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Store the Sign Up details for comparison
  signUpUsernameValue = signUpUsername.value;
  signUpPasswordValue = signUpPassword.value;

  if (signUpUsernameValue && signUpPasswordValue) {
    // Automatically switch to Sign In mode
    container.classList.remove("sign-up-mode");
  } else {
    alert("Please fill in all fields to Sign Up.");
  }
});

// Add event listener to the Sign In form's submit button
document.querySelector(".sign-in-form input[type='submit']").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Check if Sign In details match Sign Up details
  if (
    signInUsername.value === signUpUsernameValue &&
    signInPassword.value === signUpPasswordValue &&
    signInUsername.value !== "" &&
    signInPassword.value !== ""
  ) {
    // Redirect to the chatbot page
    window.location.href = "http://127.0.0.1:5000/";
  } else {
    alert("Sign In details do not match Sign Up details.");
  }
});
