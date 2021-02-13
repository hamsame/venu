// // Regex for contact form
// document.getElementById("name").addEventListener("blur", nameCheck);
// document.getElementById("message").addEventListener("blur", messageCheck);
// document.getElementById("submit-btn").addEventListener("click", submit);

// function nameCheck() {
//   const usersName = document.getElementById("name");
//   let re = /^[A-z]{2,10}\s[A-z]{2,10}$/;
//   const errorMsg = document.createElement("p");
//   errorMsg.textContent = "Please add your name";
//   const inputs = document.querySelector(".contact-form");

//   !re.test(usersName.value)
//     ? inputs.insertBefore(errorMsg, document.getElementById("email"))
//     : "";
// }

// function messageCheck() {
//   const message = document.getElementById("message").value;
//   let re = /^[A-z0-9]/;

//   !re.test(message) ? console.log("incorrect") : console.log("correct");
// }

// function submit() {
//   nameCheck();
//   messageCheck();
// }
