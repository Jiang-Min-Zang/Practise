// const btn = document.querySelector("#submitBtn");
// const input = document.querySelector("#username");
// const error = document.querySelector("#error");

// btn.addEventListener("click", () => {
//   if (input.value.trim() === "") {
//     error.classList.remove("hide");
//   } else {
//     error.classList.add("hide");
//   }
// });
// //初階題目

const error = document.querySelectorAll(".error");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const from = document.querySelector("#loginForm");

from.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value.trim() === "") {
    error[0].classList.remove("hide");
  } else if (username.value.trim().length < 8) {
    error[0].textContent = "帳號不能小於8碼";
    error[0].classList.remove("hide");
  } else {
    error[0].classList.add("hide");
  }

  if (password.value.trim() === "") {
    error[1].classList.remove("hide");
  } else if (password.value.trim().length < 8) {
    error[1].textContent = "密碼不能小於8碼";
    error[1].classList.remove("hide");
  } else {
    error[1].classList.add("hide");
  }
});
