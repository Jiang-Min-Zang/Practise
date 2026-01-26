function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function isValidName(name) {
  return name.trim().length > 0; // 非空
}

function isValidPassword(password) {
  return password.length >= 6; // 最少6碼
}

function send() {
  const emailInput = document.querySelector("");
  const nameInput = document.querySelector("");
  const passwordInput = document.querySelector("");
}
