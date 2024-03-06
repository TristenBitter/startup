function addPlayerNamesToScreen() {
  for (let i = 1; i < 5; ++i) {
    const name = "#user_" + i;
    const playerNameEl = document.querySelector(name);
    playerNameEl.textContent = this.getPlayerName(i);
  }
}

function getPlayerName(i) {
  const id = "user_" + i;

  let object = { name: localStorage.getItem(id), score: 0, banked_yet: 0 };
  let array = JSON.parse(localStorage.getItem("array"));
  //// array[3].score = localStorage.getItem(score)
  array.push(object);
  localStorage.setItem("array", JSON.stringify(array));
  return localStorage.getItem(id) ?? "Mystery player " + i;
}

PlayGame();

function resetTable() {
  if (
    localStorage.getItem("table_score") === null ||
    localStorage.getItem("table_score") === NaN
  ) {
    localStorage.setItem("table_score", 0);
  }
  if (
    localStorage.getItem("round_num") === null ||
    localStorage.getItem("round_num") === NaN
  ) {
    localStorage.setItem("round_num", 0);
  }
}

function PlayGame() {
  resetTable();
  setPlayerScore();
  setRoundNum();
}

function setRoundNum() {
  //Round_Num += 1;
  let round = parseInt(localStorage.getItem("round_num")) + 1;
  if (round === 11) {
    GameOver();
  } else {
    const nameEl_1 = document.getElementById("round_num");
    localStorage.setItem("round_num", round);
    nameEl_1.textContent = round;
  }
}

// function setTableScore() {
//   Table_Score = 0;
// }

function setPlayerScore() {}

function RollDice() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let total = dice1 + dice2;

  //console.log(dice1, dice2, total, Table_Score);

  const nameEl_1 = document.getElementById("table_score");
  let score = parseInt(localStorage.getItem("table_score"));

  if (dice1 === dice2) {
    //doubles
    if (score === 0) {
      score += total;
    }
    score *= 2;
  } else if (total === 7) {
    score = 0;
    setRoundNum();
  } else {
    // const nameEl_1 = document.getElementById("table_score");
    // //console.log(nameEl_1);
    // // let score = parseInt(localStorage.getItem("table_score")) + total;
    // localStorage.setItem("table_score", score);
    // nameEl_1.textContent = score;
    // //Table_Score += total;
    score += total;
  }
  localStorage.setItem("table_score", score); //Lets update the local storage
  nameEl_1.textContent = score;
}

function Bank(id) {
  let table_score = parseInt(localStorage.getItem("table_score"));
  let bank_score = parseInt(localStorage.getItem(id) ?? 0);
  console.log(bank_score, table_score);
  bank_score += table_score;

  localStorage.setItem(id, bank_score);
  document.getElementById(id).textContent = bank_score;
}

function GameOver() {
  // setHighScores()
  //print Good Game
  // delete local storage
  //call PlayGame() to reset the table
  localStorage.removeItem("round_num");
  localStorage.removeItem("table_score");

  //PlayGame();
  // save scores on score Board
  window.location.href = "scores.html";
}

function WebSocket() {
  //Here I will impliment my web sockeet
  // I will have real time score up dating and printing to the score page every 5 seconds.
}

document.addEventListener("DOMContentLoaded", (event) => {
  addPlayerNamesToScreen();
});
