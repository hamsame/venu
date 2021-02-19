// form validation
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const textArea = document.getElementById("message");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (firstName.value == null || firstName.value == "") {
    messages.push("Enter your first name");
  }
  if (lastName.value == null || lastName.value == "") {
    messages.push("Enter your last name");
  }
  if (email.value == null || email.value == "") {
    messages.push("Enter your email address");
  }
  if (textArea.value == null || textArea.value == "") {
    messages.push("Enter a message");
  }

  if (messages.length > 0) {
    e.preventDefault();
    document.getElementById("error").innerText = messages.join(", ");
  } else {
    alert("Form Submitted");
  }
});
