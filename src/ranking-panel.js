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




// const username = document.getElementById('username');
// const total = document.getElementById('total');
// const finalScore = document.getElementById('finalScore');
// const mostRecentScore = localStorage.getItem('mostRecentScore');

// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// const MAX_HIGH_SCORES = 3;

// finalScore.innerText = mostRecentScore;

// username.addEventListener('keyup', () => {
//     total.disabled = !username.value;
// });

// saveHighScore = (e) => {
//     e.preventDefault();

//     const score = {
//         score: mostRecentScore,
//         name: username.value,
//     };
//     highScores.push(score);
//     highScores.sort((a, b) => b.score - a.score);
//     highScores.splice(3);

//     localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/');
// };
