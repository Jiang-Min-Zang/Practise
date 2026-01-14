// function send() {
//   const test = document.querySelector(".question-internal");
//   test.style.display = "flex";
//   console.log("hi");
// }

// const buttons = document.querySelectorAll(".question-internal");

// function send(index) {
//   // button.style.display = "flex";
//   console.log(index, "你點擊了按鈕 ${index + 1}");
//   console.log(button, "button");
// }

// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => send(index));
// });

//找到你所有的按鈕
var spans = document.querySelectorAll(".question-external-span span");
//加上按鈕點擊事件
for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function () {
    //先找到父層
    var question = this.closest(".question");
    //再找子層
    var questionInternal = question.querySelector(".question-internal");
    // console.log(questionInternal, "-----questionInternal");
    questionInternal.classList.toggle("active");
  });
}
