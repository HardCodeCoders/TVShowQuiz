export default function getUsername () {
    var usernameInput = document.getElementById("username").value;
    localStorage.setItem("username", usernameInput);
    return usernameInput;
}

