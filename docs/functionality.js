const userEmail = new Object();

function sendEmail() {
  let params = {
    emailText: document.getElementById("emailText").value,
    subjectText: document.getElementById("subjectText").value,
    userMessage: document.getElementById("userMessage").value,
  };

  emailjs
    .send("service_o3gc7tk", "template_meec8bo", params)
    .then(alert("Email Sent"));

    console.log(params);
}

let form = document.getElementById("formPage");
form.addEventListener("submit", function (doThis) {
  doThis.preventDefault();
  sendEmail();
});
