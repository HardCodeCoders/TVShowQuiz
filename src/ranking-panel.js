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
