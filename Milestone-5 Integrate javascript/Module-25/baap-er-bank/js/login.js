document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //   console.log(userEmail);

  //get your password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  //   console.log(userPassword);
  if (userEmail == "sontan@baap.com" && userPassword == "secret") {
    // console.log("valid user");
    window.location.href = "banking.html";
  }
});