const categoryGot = document.querySelector(".GameOfThrone");
const categoryRm = document.querySelector(".RickAndMorty");
const categoryBb = document.querySelector(".Breaking-Bad");

function goToQuiz(category) {
  localStorage.setItem("category", category);
  const page = window.location
    .toString()
    .substr(0, window.location.toString().lastIndexOf("/"));

  // Redirect
  window.location.href = page + "/filler-panel.html";
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
