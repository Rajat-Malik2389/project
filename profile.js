document.addEventListener("DOMContentLoaded", () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Redirect to signup page if no user data is found
  if (!user || !user.accessToken) {
    window.location.href = "index.html";
    return;
  }

  // Populate profile details
  const profileDetails = document.getElementById("profileDetails");
  profileDetails.innerHTML = `
      <p><strong>Full Name:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Password:</strong> ${user.password}</p>
    `;

  // Logout functionality
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");
    // Redirect to signup page
    window.location.href = "index.html";
  });
});
