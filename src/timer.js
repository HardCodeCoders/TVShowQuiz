const quizTime = document.querySelector(".footer__time-bar__time");
const styleElem = document.head.appendChild(document.createElement("style"));
const TIME = 10;

export default class QuizTimer {
  constructor() {
    this.timeLeft = TIME;
    this.prefix = "0:";
  }

  // Update timer line on the webpage
  updateProgressBar() {
    styleElem.innerHTML = `
    .footer__time-bar__time-progress::before {
      left: 99%;
      transition: all ${TIME}s linear;
    } .footer__time-bar__time-progress::after {
      width: 100%;
      transition: all ${TIME}s linear;
    }`;
  }

  // Counting down fucntion
  countingDown() {
    const t = setInterval(() => {
      this.updateProgressBar();

      // display time on the webpage
      if (this.timeLeft < 10) this.prefix = "0:0";
      quizTime.innerText = this.prefix + this.timeLeft--;

      // stop timer
      if (this.timeLeft < 0) {
        clearInterval(t);
        alert(
          "Correct: " +
            localStorage.getItem("trueAnswer") +
            "\nWrong: " +
            localStorage.getItem("falseAnswer")
        );
        window.location.pathname = "/intro-panel.html";
      }
    }, 1000);
  }
}
