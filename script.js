const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Your wedding invitation request has been submitted successfully!");
  form.reset();
});
