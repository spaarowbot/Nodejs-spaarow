  const toggleFormButton = document.getElementById("toggleForm");
  const submitButton = document.getElementById("submitButton");
  const formTitle = document.getElementById("formTitle");
  const usernameField = document.getElementById("usernameField");
  const verifyPasswordField = document.getElementById("verifyPasswordField");
  const loginForm = document.getElementById("loginForm");

  let isRegistering = false;

  toggleFormButton.addEventListener("click", function() {
    isRegistering = !isRegistering;

    if (isRegistering) {
      formTitle.textContent = "Register";
      toggleFormButton.textContent = "Sign in";
      submitButton.textContent = "Register";
      usernameField.style.display = "block";
      verifyPasswordField.style.display = "block";
    } else {
      formTitle.textContent = "Login";
      toggleFormButton.textContent = "Register";
      submitButton.textContent = "Sign in";
      usernameField.style.display = "none";
      verifyPasswordField.style.display = "none";
    }
  });

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (isRegistering) {
      // Handle registration logic here
      console.log("Registering user:", {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        verifyPassword: document.getElementById("verifyPassword").value,
      });
    } else {
      // Handle login logic here
      console.log("Logging in user:", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      });

      // Redirect to app/index.html
      window.location.href = 'app/index.html';
    }
  });