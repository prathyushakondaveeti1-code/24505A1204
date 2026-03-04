document.getElementById("userSignIn").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = e.target.querySelector("input[type='text']").value.trim();
  const password = e.target.querySelector("input[type='password']").value.trim();

  if(email === "admin@gmail.com" && password === "1234") {
    alert("Login Successful");
    window.location.href = "admin.html";
  } else {
    alert("Invalid Credentials");
  }
});