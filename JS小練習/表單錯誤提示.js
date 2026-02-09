const btn = document.querySelector("#submitBtn");
const input = document.querySelector("#username");
const error = document.querySelector("#error");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    error.classList.remove("hide");
  } else {
    error.classList.add("hide");
  }
});
