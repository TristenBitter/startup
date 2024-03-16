async function loadScores() {
  let scores = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch("/api/scores");
    scores = await response.json();
  } catch {
    console.error("failed to load scores");
  }

  return scores;
}

async function showScores() {
  let scores = await loadScores();

  const tableBodyEl = document.querySelector("#high_scores");

  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      const positionTdEl = document.createElement("td");
      const nameTdEl = document.createElement("td");
      const scoreTdEl = document.createElement("td");
      const dateTdEl = document.createElement("td");

      positionTdEl.textContent = i + 1;
      nameTdEl.textContent = score.name;
      scoreTdEl.textContent = score.score;
      dateTdEl.textContent = score.date;

      const rowEl = document.createElement("tr");
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(scoreTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = "<tr><td colSpan=4>Be the first to score</td></tr>";
  }
}

function dataBase_data() {
  //future database data implimented here.
}

showScores();

// Simulate chat messages that will come over WebSocket
setInterval(() => {
  const score = Math.floor(Math.random() * 3000);
  const chatText = document.querySelector("#player-messages");
  chatText.innerHTML =
    `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` +
    chatText.innerHTML;
}, 5000);
