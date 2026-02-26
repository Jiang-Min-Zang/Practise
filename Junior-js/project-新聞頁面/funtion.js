const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const close = document.querySelector(".menu-close");
btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

close.addEventListener("click", () => {
  nav.classList.toggle("active");
});
