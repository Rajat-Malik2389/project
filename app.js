document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const message = document.getElementById("message");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

    // Get form inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    // Validate inputs
    if (!username || !email || !password || !confirmPassword) {
      message.textContent = "All fields are required!";
      message.className = "error";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      message.className = "error";
      return;
    }

    // Generate access token (random 16-byte string)
    const accessToken = Array.from(crypto.getRandomValues(new Uint8Array(16)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Save user data to localStorage
    const user = { username, email, password, accessToken };
    localStorage.setItem("user", JSON.stringify(user));

    // Display success message
    message.textContent = "Signup successful! Redirecting to profile...";
    message.className = "success";

    // Redirect to profile after a short delay
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 1500);
  });
});
