const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const userName = document.querySelector("#user-name").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (userName && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert("Incorrect username or password");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#user-name").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (userName && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("User profile created!");
      document.location.replace("/");
    } else {
      alert("Please fill out all fields");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
