const categoryGot = document.querySelector(".GameOfThrone");
const categoryRm = document.querySelector(".RickAndMorty");
const categoryBb = document.querySelector(".Breaking-Bad");

function goToQuiz(category) {
  localStorage.setItem("category", category);
  document.location.href = "/quiz-panel.html";
}

export function selectCategory() {
  categoryGot.addEventListener("click", () => {
    goToQuiz("got");
  });
  categoryRm.addEventListener("click", () => {
    goToQuiz("rm");
  });
  categoryBb.addEventListener("click", () => {
    goToQuiz("bb");
  });
}
