function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function Send() {
  const input = document.querySelector(".input-style");
  const errorText = document.querySelector(".input-error-text");
  const email = input.value.trim();
  // errorText.style.display = "block";
  // input.style.border = "1px solid red";
  // 加!=不是
  if (!isValidEmail(email)) {
    errorText.style.display = "block";
    input.style.border = "1px solid red";
  } else {
    errorText.style.display = "none";
    input.style.border = "1px solid #ccc";
    alert("Email sent!");
  }
}
const input = document.querySelector(".input-style");
const errorText = document.querySelector(".input-error-text");
input.addEventListener("input", () => {
  if (input.value === "") {
    errorText.style.display = "none";
    input.style.border = "1px solid #ccc";
  }
});
