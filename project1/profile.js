// Check login
const user = localStorage.getItem("loggedInUser");

if (!user) {
  window.location.href = "signin.html";
}

// Display user info
document.getElementById("userEmail").innerText = user;
document.getElementById("lastLogin").innerText = new Date().toLocaleString();

// Example submissions
const submissions = [
  { date: "2026-02-15", result: "Possible Blood Types: A, O" },
  { date: "2026-02-10", result: "Possible Blood Types: B, O" }
];

window.onload = function () {
  const list = document.getElementById("submissionList");

  if (submissions.length === 0) {
    list.innerHTML = "<li>No submissions yet.</li>";
  } else {
    submissions.forEach(sub => {
      const li = document.createElement("li");
      li.textContent = `${sub.date} → ${sub.result}`;
      list.appendChild(li);
    });
  }
};

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out.");
  window.location.href = "signin.html";
}