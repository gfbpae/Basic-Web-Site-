document.addEventListener("DOMContentLoaded", function() 
{
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nationalId = document.getElementById("nationalId").value;
      const password = document.getElementById("password").value;
  
      // Using fetch to send user credentials to the API
      fetch("http://localhost:8080/bank/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: nationalId,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        // Checking the API response
        if (data.success) {
          // Successful login
          alert("Login successful!");
          // Redirect to the relevant page (e.g., index.html)
          window.location.href = "/main.html";
        } else {
          // Unsuccessful login
          alert("Login failed! Please check your username and password.");
          window.location.href = "/register.html";

        }
      })
      .catch(error => {
        console.error("An error occurred during the API request:", error);
        alert("An error occurred. Please try again.");
      });
    });
});
  