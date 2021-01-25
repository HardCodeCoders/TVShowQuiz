const highScoresList = document.getElementById("total");
const highScores = JSON.parse(localStorage.getItem(highScores)) || [];

highScoresList.innerHTML = highScores
.map(score => {
    return `${score.name}` `${score.score}`;
})
.join("");