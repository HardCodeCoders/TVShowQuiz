import GOTPanel from "./got-panel";
import RMPanel from "./rm-panel";
import BBPanel from "./bb-panel";

const answersBtn = document.querySelectorAll(".main__quiz__button");
const logoImg = document.querySelector("#logo");

const gotQuizPanel = new GOTPanel(53);
const rmQuizPanel = new RMPanel(20);
const bbQuizPanel = new BBPanel(50);
const QuizParams = {
  correctAnswer: "",
  questionCounter: 0,
  trueAnswer: 0,
  falseAnswer: 0,
  quizName: "",
};

function checkAnswer(e) {
  answersBtn.forEach((e) => e.removeEventListener("click", checkAnswer));

  if (parseInt(e.target.dataset.id, 10) === QuizParams.correctAnswer.id) {
    e.target.classList.add("btn--correct");
    QuizParams.questionCounter++;
    QuizParams.trueAnswer++;
    setTimeout(() => {
      showQuestion(QuizParams.quizName);
    }, 1000);
  } else {
    e.target.classList.add("btn--wrong");
    QuizParams.questionCounter++;
    QuizParams.falseAnswer++;
    setTimeout(() => {
      showQuestion(QuizParams.quizName);
    }, 1000);
  }
}

function insertImage(correctAnswer) {
  const characterImg = document.querySelector("#character-img");
  setTimeout(() => {
    if (correctAnswer.image === undefined) insertImage(correctAnswer);
    else characterImg.style.backgroundImage = `url("${correctAnswer.image}")`;
  }, 100);
}

function insertAnswers(answers) {
  setTimeout(() => {
    if (answers[3].id === undefined) insertAnswers(answers);
    else {
      for (let i in answers) {
        clearBtn(answersBtn[i]);
        answersBtn[i].innerText = answers[i].name;
        answersBtn[i].dataset.id = answers[i].id;
        answersBtn[i].addEventListener("click", checkAnswer);
      }
    }
  }, 200);
}

function clearBtn(btn) {
  btn.classList.remove("btn--correct");
  btn.classList.remove("btn--wrong");
}

function setQuestionParameters(base) {
  const answers = base.drawAnswers(QuizParams.questionCounter + 1);
  const newOrder = base.shuffledArray(answers);
  QuizParams.correctAnswer = answers[0];

  insertImage(QuizParams.correctAnswer);
  insertAnswers(newOrder);
}

export function showQuestion(quizName) {
  QuizParams.quizName = quizName;
  switch (quizName) {
    case "got":
      setQuestionParameters(gotQuizPanel);
      logoImg.setAttribute("src", "img/got-logo.png");
      break;

    case "rm":
      setQuestionParameters(rmQuizPanel);
      logoImg.setAttribute("src", "img/rm-logo.png");
      break;

    case "bb":
      setQuestionParameters(bbQuizPanel);
      logoImg.setAttribute("src", "img/bb-logo.png");
      break;

    default:
      alert("error: wrong category");
  }
}
