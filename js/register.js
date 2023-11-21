document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const nationalId = document.getElementById("nationalId").value;
    const password = document.getElementById("password").value;

    // Using fetch to send user credentials to the API
    fetch("http://localhost:8080/bank/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        nationalId: nationalId,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      // Checking the API response
      if (data.success) {
        // Successful registration
        alert("Registration successful! You can now log in.");
        // Redirect to the login page (e.g., login.html)
        window.location.href = "/login.html";
      } else {
        // Unsuccessful registration
        alert("Registration failed! Please choose a different username.");
      }
    })
    .catch(error => {
      console.error("An error occurred during the API request:", error);
      alert("An error occurred. Please try again.");
    });
  });
});
