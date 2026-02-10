// const btn = document.querySelector("#btn");
// const onText = document.querySelector(".text.on");
// const offText = document.querySelector(".text.off");

// btn.addEventListener("click", () => {
//   offText.classList.toggle("hide");
//   onText.classList.toggle("hide");
// });

// const toggle = document.querySelector("#toggleBtn");
// const short = document.querySelector(".short");
// const long = document.querySelector(".full");

// toggle.addEventListener("click", () => {
//   short.classList.toggle("hide");
//   long.classList.toggle("hide");
// });
// 初階

const button = document.querySelectorAll(".toggleBtn");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn, "---------ttttt");
    const product = btn.closest(".product");
    const shortText = product.querySelector(".short");
    const fullText = product.querySelector(".full");

    shortText.classList.toggle("hide");
    fullText.classList.toggle("hide");

    if (btn.textContent === "查看更多") {
      btn.textContent = "收合大小";
    } else {
      btn.textContent = "查看更多";
    }
  });
});
// buttons.forEach()  每個商品按鈕都加事件
// btn.closest('.product')  找到按鈕所在的商品區塊
// querySelector('.short').full → 取得簡短/完整文字
// classList.toggle('hide')  切換顯示或隱藏
// if/else → 改按鈕文字
