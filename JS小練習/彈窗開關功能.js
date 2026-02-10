// const open = document.querySelector("#openBtn");
// const close = document.querySelector("#closeBtn");
// const modal = document.querySelector("#modal");

// open.addEventListener("click", () => {
//   modal.classList.remove("hide");
// });
// close.addEventListener("click", () => {
//   modal.classList.add("hide");
// }); //初階題目

const modal = document.querySelector("#modal");
const deleteBtn = document.querySelectorAll(".deleteBtn");
const modalText = document.querySelector("#modalText");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
let targetLi = null;

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const li = btn.closest("li");
    // console.log(li);
    const productName = li.firstChild.textContent.trim();
    // console.log(productName, "------你是什麼");
    targetLi = li;
    modalText.textContent = `確定要刪除 ${productName} 嗎？`;
    console.log(modalText);
    modal.classList.remove("hide");
  });
});

confirmBtn.addEventListener("click", () => {
  if (targetLi) {
    targetLi.remove();
    targetLi = null;
  }
  modal.classList.add("hide");
});

cancelBtn.addEventListener("click", () => {
  targetLi = null;
  modal.classList.add("hide"); // 隱藏 Modal
});

// deleteBtns.forEach()  每個刪除按鈕加事件
// btn.closest('li')  找到對應商品區塊
// li.firstChild.textContent  拿商品名稱
// modalText.textContent = 顯示在 Modal
// modal.classList.remove('hide')  打開 Modal
// cancelBtn.addEventListener  點取消就關掉
// confirmBtn.addEventListener 點確認刪除li targetLi是其中的變數
