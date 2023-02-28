let emailaddr = document.getElementById("email");
let btn = document.getElementById("btn");
let valid = document.getElementById("valid");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validateEmail(emailaddr.value)) {
    valid.style.opacity = 1;
    emailaddr.style.borderColor = "red";
    if (window.innerWidth <= 575) {
      valid.style.display = "block";
    }
  } else {
    valid.style.opacity = 0;
    emailaddr.style.borderColor = "green";
    if (window.innerWidth <= 575) {
      valid.style.display = "none";
    }
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
