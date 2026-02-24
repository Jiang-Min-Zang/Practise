const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
