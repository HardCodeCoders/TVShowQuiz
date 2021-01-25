const bgImg = document.querySelector(".container");
const title = document.querySelector("#title");

export default function setBackground() {
  const category = localStorage.getItem("category");
  switch (category) {
    case "got":
      bgImg.style.backgroundImage = `linear-gradient(
        170deg,
        rgba(0, 15, 31, 0.5) 5%,
        rgba(206, 70, 70, 0) 40%,
        rgba(4, 8, 15, 0.9) 100%
      ),url('img/got.jpg')`;
      title.innerText = "GAME OF THRONES";
      break;

    case "rm":
      bgImg.style.backgroundImage = `linear-gradient(
        170deg,
        rgba(0, 15, 31, 0.5) 5%,
        rgba(206, 70, 70, 0) 40%,
        rgba(4, 8, 15, 0.9) 100%
      ),url('img/rm.jpg')`;
      title.innerText = "RICK AND MORTY";
      break;

    case "bb":
      bgImg.style.backgroundImage = `linear-gradient(
        170deg,
        rgba(0, 15, 31, 0.5) 5%,
        rgba(206, 70, 70, 0) 40%,
        rgba(4, 8, 15, 0.9) 100%
      ),url('img/bb.jpg')`;
      title.innerText = "BREAKING BAD";
      break;

    default:
      alert("error: wrong category");
  }
}
