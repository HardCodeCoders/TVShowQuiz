export function generateRanking({
  rankingObject,
  rankingName,
  currentPlayerName,
}) {
  let rankingDiv = document.createElement("div");
  rankingDiv.className = "ranking-container";

  let rankingNameSpan = document.createElement("span");
  rankingNameSpan.className = "ranking-name";
  rankingNameSpan.textContent = rankingName + ":";

  let rankingList = document.createElement("ol");
  rankingList.className = "ranking-list";
  rankingObject.scores.forEach((player) => {
    let singleRow = document.createElement("li");

    let playerNameSpan = document.createElement("span");
    playerNameSpan.textContent = player.name;
    if (player.name == currentPlayerName) {
      playerNameSpan.dataset.currentPlayer = player.name;
    }

    let playerScoreSpan = document.createElement("span");
    playerScoreSpan.textContent = player.score;

    singleRow.appendChild(playerNameSpan);
    singleRow.appendChild(playerScoreSpan);

    rankingList.appendChild(singleRow);
  });

  rankingDiv.appendChild(rankingNameSpan);
  rankingDiv.appendChild(rankingList);

  let view = {
    element: rankingDiv,
    markCurrentPlayer: () => {
      let currentPlayerSpan = view.element.querySelector(
        "span[data-current-player]"
      );
      currentPlayerSpan.parentElement.classList.add("ranking-current-player");
    },
  };
  return view;
}
