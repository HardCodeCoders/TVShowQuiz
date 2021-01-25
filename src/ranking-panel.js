function saveName() {
  const usernameInput = document.getElementById("username").value;
  localStorage.setItem("username", usernameInput);

  return usernameInput;
}

export function getUsername() {
  const btn = document.querySelector("#button");
  btn.addEventListener("click", saveName);
}

export function displayNameOnPage() {
  const name = document.querySelector("#name");
  name.innerText = localStorage.getItem("username");
}

export function bestResults() {
  if (!localStorage.getItem("first")) {
    localStorage.setItem("first", "");
    localStorage.setItem("firstScore", 0);
  }

  if (!localStorage.getItem("second")) {
    localStorage.setItem("second", "");
    localStorage.setItem("secondScore", 0);
  }

  if (!localStorage.getItem("third")) {
    localStorage.setItem("third", "");
    localStorage.setItem("thirdScore", 0);
  }

  const user = localStorage.getItem("username");
  const score =
    parseInt(localStorage.getItem("trueAnswer")) * 10 -
    parseInt(localStorage.getItem("falseAnswer"));

  const firstScore = parseInt(localStorage.getItem("firstScore"));

  const secondScore = parseInt(localStorage.getItem("secondScore"));

  const thirdScore = parseInt(localStorage.getItem("thirdScore"));

  if (score > thirdScore) {
    localStorage.setItem("third", user);
    localStorage.setItem("thirdScore", score);
  } else if (score > secondScore) {
    localStorage.setItem("second", user);
    localStorage.setItem("secondScore", score);
  } else if (score > firstScore) {
    localStorage.setItem("first", user);
    localStorage.setItem("firstScore", score);
  }

  document.querySelector("#stUsedname").innerText = localStorage.getItem(
    "first"
  );

  document.querySelector("#stScore").innerText = localStorage.getItem(
    "firstScore"
  );

  document.querySelector("#ndUsername").innerText = localStorage.getItem(
    "second"
  );

  document.querySelector("#ndScore").innerText = localStorage.getItem(
    "secondScore"
  );

  document.querySelector("#rdUsername").innerText = localStorage.getItem(
    "third"
  );

  document.querySelector("#rdScore").innerText = localStorage.getItem(
    "thirdScore"
  );
}
