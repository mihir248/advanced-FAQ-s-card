document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isOpen = answer.classList.contains("show");

      // Close all other answers
      document.querySelectorAll(".faq-answer").forEach((el) => el.classList.remove("show"));
      document.querySelectorAll(".faq-question").forEach((el) => el.classList.remove("active"));

      // Toggle the current one
      if (!isOpen) {
        answer.classList.add("show");
        this.classList.add("active");
      }
    });
  });
});
