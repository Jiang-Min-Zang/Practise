const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  console.log(tab, "------tab");
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    contents.forEach((c) => c.classList.add("hide"));
    tab.classList.add("active");
    contents[index].classList.remove("hide");
  });
});
