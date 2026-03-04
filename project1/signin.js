document.getElementById("userSignIn").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(email === "admin@gmail.com" && password === "1234") {
    document.getElementById("signInResult").innerHTML =
      "<p style='color:green;'>Sign in successful! Redirecting...</p>";

    setTimeout(() => {
      window.location.href = "admin.html";  // redirect after success
    }, 1500);

  } else {
    document.getElementById("signInResult").innerHTML =
      "<p style='color:red;'>Invalid credentials. Try again.</p>";
  }
});