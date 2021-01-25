import { showQuestion } from "./quiz-panel";
import { selectCategory } from "./category-selection";
import QuizTimer from "./timer";
import setBackground from "./filler-panel";
import { getUsername, displayNameOnPage, bestResults } from "./ranking-panel";

const quizTimer = new QuizTimer();

// Get current html file name
const page = window.location.pathname.split("/").pop();

switch (page) {
  case "intro-panel.html":
    // Select quiz category
    selectCategory();
    break;

  case "filler-panel.html":
    // Seb background image
    setBackground(null);

    // Save user name to local storage
    getUsername();
    break;

  case "quiz-panel.html":
    // Display panel for choosen category
    const category = localStorage.getItem("category");
    showQuestion(category);

    // Run timer
    quizTimer.countingDown();
    break;

  case "ranking.html":
    displayNameOnPage();
    bestResults();
    break;

  default:
    console.log("Page ", page);
}
