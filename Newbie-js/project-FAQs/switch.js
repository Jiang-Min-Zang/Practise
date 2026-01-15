// function send() {
//   const test = document.querySelector(".question-internal");
//   test.style.display = "flex";
//   console.log("hi");
// }

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

var buttons = document.querySelectorAll(".question-external-span");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var question = this.closest(".question"); //這個沒加也沒關係
    var plusIcon = this.querySelector(".span-open");
    var minusIcon = this.querySelector(".span-close");
    var content = question.querySelector(".question-internal");

    if (content.style.display === "flex") {
      // 關閉
      content.style.display = "none";
      plusIcon.style.display = "inline-block";
      minusIcon.style.display = "none";
    } else {
      // 打開
      content.style.display = "flex";
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline-block";
    }
  });
}
