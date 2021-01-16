import { showQuestion } from "./quiz-panel";
import { selectCategory } from "./category-selection";
import QuizTimer from "./timer";

const quizTimer = new QuizTimer();

// Get current html file name
const page = window.location.pathname.split("/").pop();

switch (page) {
  case "intro-panel.html":
    // Select quiz category
    selectCategory();
    break;

  case "quiz-panel.html":
    // Display panel for choosen category
    const category = localStorage.getItem("category");
    showQuestion(category);

    // Run timer
    quizTimer.countingDown();
    break;

  default:
    console.error("Wrong page name");
}
