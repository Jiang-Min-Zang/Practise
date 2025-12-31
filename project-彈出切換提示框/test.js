const share = document.querySelector(".share-hide");
const profile = document.querySelector(".profile");
function send() {
  share.style.display = "flex";
  profile.style.display = "none";
}

// function handleResize() {
//   const width = window.innerWidth;
//   console.log("目前寬度：", width);
//   if (width <= 414) {
//     share.style.display = "none";
//     profile.style.display = "flex";
//   }
// }
// window.addEventListener("resize", handleResize);
