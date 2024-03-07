function addPlayerNamesToScreen() {
  for (let i = 1; i < 5; ++i) {
    const name = "#user_" + i;
    const playerNameEl = document.querySelector(name);
    playerNameEl.textContent = this.getPlayerName(i);
    create_obj(i);
  }
}

function getPlayerName(i) {
  const id = "user_" + i;

  //let object = { name: localStorage.getItem(id), score: 0, banked_yet: 0 };
  //localStorage.setItem()
  //let array = JSON.parse(localStorage.getItem("array"));
  //// array[3].score = localStorage.getItem(score)
  //array.push(object);
  //localStorage.setItem("array", JSON.stringify(array));
  return localStorage.getItem(id) ?? "Mystery player " + i;
}

function create_obj(i) {
  const id = "player_" + i;
  const name_id = "user_" + i;
  let object = { name: localStorage.getItem(name_id), score: 0, banked_yet: 0 };
  localStorage.setItem(id, JSON.stringify(object));
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

function Bank(id, player_num) {
  let table_score = parseInt(localStorage.getItem("table_score"));
  //let bank_score = parseInt(localStorage.getItem(id) ?? 0);
  //console.log(bank_score, table_score);
  //bank_score += table_score;

  //localStorage.setItem(id, bank_score);
  //   document.getElementById(id).textContent = bank_score;
  let round = localStorage.getItem("round_num");

  let player_obj = localStorage.getItem(player_num);
  let jason = JSON.parse(player_obj);
  let score = jason["score"];
  let name = jason["name"];

  let banked_yet = jason["banked_yet"];

  if (banked_yet != round) {
    score += table_score;
  }
  let object = {
    name: name,
    score: score,
    banked_yet: round,
  };
  localStorage.setItem(player_num, JSON.stringify(object));

  document.getElementById(id).textContent = score;
}

function GameOver() {
  setHighScores();

  //print Good Game
  // delete local storage
  //call PlayGame() to reset the table
  localStorage.removeItem("round_num");
  localStorage.removeItem("table_score");
  localStorage.removeItem("player_1");
  localStorage.removeItem("player_2");
  localStorage.removeItem("player_3");
  localStorage.removeItem("player_4");
  localStorage.removeItem("user_1");
  localStorage.removeItem("user_2");
  localStorage.removeItem("user_3");
  localStorage.removeItem("user_4");

  //PlayGame();
  // save scores on score Board
  window.location.href = "scores.html";
}

function setHighScores() {
  //let array_of_scores = [];
  ///find the High Score
  let p_1 = localStorage.getItem("player_1");
  let jason = JSON.parse(p_1);
  let score_1 = jason["score"];

  let p_2 = localStorage.getItem("player_2");
  let jason_2 = JSON.parse(p_2);
  let score_2 = jason_2["score"];

  let p_3 = localStorage.getItem("player_3");
  let jason_3 = JSON.parse(p_3);
  let score_3 = jason_3["score"];

  let p_4 = localStorage.getItem("player_4");
  let jason_4 = JSON.parse(p_4);
  let score_4 = jason_4["score"];

  let i = 1;
  let highscore = 0;
  // which of all the scores is the Highest?
  //set i to the player number of the winner (1, 2, 3, or 4)

  if (score_1 >= score_2 && score_1 >= score_3 && score_1 >= score_4) {
    i = 1;
    highscore = score_1;
  } else if (score_2 >= score_1 && score_2 >= score_3 && score_2 >= score_4) {
    i = 2;
    highscore = score_2;
  } else if (score_3 >= score_1 && score_3 >= score_2 && score_3 >= score_4) {
    i = 3;
    highscore = score_3;
  } else if (score_4 >= score_1 && score_4 >= score_3 && score_1 >= score_2) {
    i = 4;
    highscore = score_4;
  }

  ///send the winner Object to load scores
  const name_id = "user_" + i;

  let scores = [];
  const scoresText = localStorage.getItem("scores");
  if (scoresText) {
    scores = JSON.parse(scoresText);
  }
  const d = new Date();
  let WINNER = {
    name: localStorage.getItem(name_id),
    score: highscore,
    date: d.toUTCString(),
  };

  scores.push(WINNER);
  localStorage.setItem("scores", JSON.stringify(scores));
}

function WebSocket() {
  //Here I will impliment my web sockeet
  // I will have real time score up dating and printing to the score page every 5 seconds.
}

document.addEventListener("DOMContentLoaded", (event) => {
  addPlayerNamesToScreen();
});
