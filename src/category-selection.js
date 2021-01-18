const categoryGot = document.querySelector(".GameOfThrone");
const categoryRm = document.querySelector(".RickAndMorty");
const categoryBb = document.querySelector(".Breaking-Bad");

function goToQuiz(category) {
  localStorage.setItem("category", category);
  let page = "";
  // page = "TVShowQuiz";
  console.log("test 4");
  window.location.pathname = page + "/quiz-panel.html";
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
