const bgImg = document.querySelector(".container");

export default function setBackground() {
  const category = localStorage.getItem("category");
  switch (category) {
    case "got":
      bgImg.style.backgroundImage = `url('img/got.jpg')`;
      break;

    case "rm":
      bgImg.style.backgroundImage = `url('img/rm.png')`;
      break;

    case "bb":
      bgImg.style.backgroundImage = `url('img/bb.jpg')`;
      break;

    default:
      alert("error: wrong category");
  }
}
