var first_name = document.getElementById("beneficiary_first_name");

first_name.addEventListener("input", function (event) {
  if (first_name.validity.patternMismatch) {
    first_name.setCustomValidity("Names must contain only text (no numbers or symbols)");
  } else {
    email.setCustomValidity("");
  }
});