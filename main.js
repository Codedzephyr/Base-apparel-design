const icon = document.getElementById("icon");
const ValidError = document.getElementById("error-text");
const error = document.getElementById("error");
const emailBorder = document.getElementById("email");

icon.addEventListener("click", () => {
  email = document.getElementById("email").value;
  ValidError.style.display = "none";
  error.style.display = "none";
  emailBorder.style.borderColor = "#ccc";

  var regex =
    /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

  if (regex.test(email) === false) {
    ValidError.style.display = "block";
    error.style.display = "block";
    emailBorder.style.borderColor = "hsl(0, 93%, 68%)";
  }

  if (email == "" || email == null) {
    ValidError.style.display = "block";
    error.style.display = "block";
    emailBorder.style.borderColor = "hsl(0, 93%, 68%)";
    return;
  }
});
