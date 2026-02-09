const open = document.querySelector("#openBtn");
const close = document.querySelector("#closeBtn");
const modal = document.querySelector("#modal");

open.addEventListener("click", () => {
  modal.classList.remove("hide");
});
close.addEventListener("click", () => {
  modal.classList.add("hide");
});
