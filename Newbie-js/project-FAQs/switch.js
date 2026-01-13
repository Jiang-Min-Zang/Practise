var spans = document.querySelectorAll(".question-external-span span");

for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function () {
    var question = this.closest(".question");
    question.classList.toggle("active");
  });
}
