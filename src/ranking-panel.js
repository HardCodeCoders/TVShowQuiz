export default function getUsername () {
    var usernameInput = document.getElementById("name").value;
    localStorage.setItem("username", usernameInput);
    return usernameInput;
}

export function getScore () {
    var scoreInput = document.getElementById("total").value;
    localStorage.setItem("total", scoreInput);
    return scoreInput;
}

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
