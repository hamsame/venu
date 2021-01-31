// Regex for contact form
document.getElementById("name").addEventListener("blur", nameCheck);
document.getElementById("email").addEventListener("blur", emailCheck);
document.getElementById("message").addEventListener("blur", messageCheck);
document.getElementById("submit-btn").addEventListener("click", submit);

function nameCheck() {
  const usersName = document.getElementById("name").value;
  let re = /^[A-z]{2,10}\s[A-z]{2,10}$/;

  !re.test(usersName) ? console.log("incorrect") : console.log("correct");
}

function emailCheck() {
  const email = document.getElementById("email").value;
  let re = /^([A-z][0-9]?)@([A-z])\.(A-z)$/;

  !re.test(email) ? console.log("incorrect") : console.log("correct");
}

function messageCheck() {
  const message = document.getElementById("message").value;
  let re = /^[A-z0-9]/;

  !re.test(message) ? console.log("incorrect") : console.log("correct");
}

function submit() {
  nameCheck();
  emailCheck();
  messageCheck();
}
