const share = document.querySelector(".share-hide");
const profile = document.querySelector(".profile-share");
const shareBackground = document.querySelector(".share-background");
const width = window.innerWidth;
let toggle = false;

// function send(color) {
//   toggle = !toggle;
//   console.log("目前寬度：", width);
//   if (width <= 768) {
//     share.style.zIndex = color === "gray" ? -1 : 0;
//   } else {
//     share.style.display = toggle ? "block" : "none";
//   }
// }

function send(color) {
  console.log("目前寬度：", width);
  if (width <= 768) {
    if (color === "gray") {
      share.style.zIndex = -1;
    } else {
      share.style.zIndex = 0;
    }
    // 三元  條件 ? 成立時的值 : 不成立時的值
    // share.style.zIndex = color === "gray" ? -1 : 0
  } else {
    // share.style.display = "none";
    toggle = !toggle;
    share.style.display = toggle ? "flex" : "none";
    shareBackground.style.display = "none";
  }

  // profile.style.display = "none";
}

function handleResize() {
  //從手機板滑動到web版 不要讓彈窗跑出來
  const width = window.innerWidth;
  console.log("目前寬度：", width);
  if (width >= 768) {
    share.style.display = "none";
  }
}
window.addEventListener("resize", handleResize);
window.onload = () => {
  //如果是web版 彈窗預設關閉
  if (width >= 768) {
    share.style.display = "none";
  }
};
