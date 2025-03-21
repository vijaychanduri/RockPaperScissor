const score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  updateScore();
  // if(!score){
  //    score={
  //       wins:0,
  //       losses:0,
  //       ties:0
  //    };
  // }
  function playGame(playerMove) {
    const computerMove = pickComputermove();
    let result = "";
    if (playerMove === "Scissors") {
      if (computerMove === "Scissors") {
        result = "Tie";
      } else if (computerMove === "rock") {
        result = "You Lose";
      } else if (computerMove === "paper") {
        result = "You won";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie";
      } else if (computerMove === "paper") {
        result = "You Lose";
      } else if (computerMove === "Scissors") {
        result = "You won";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "paper") {
        result = "Tie";
      } else if (computerMove === "Scissors") {
        result = "You Lose";
      } else if (computerMove === "rock") {
        result = "You won";
      }
    }
    if (result === "You won") {
      score.wins = score.wins + 1;
    } else if (result === "You Lose") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));
    updateScore();
    document.querySelector(".js-result").innerHTML = `${result}`;

    document.querySelector(
      ".js-moves"
    ).innerHTML = ` You
  <img src="images/${playerMove}-emoji.png" class="move-icon" />
  <img src="images/${computerMove}-emoji.png" class="move-icon" />
  Computer`;
  }

  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = ` Wins:${score.wins},losses:${score.losses},Ties:${score.ties}`;
  }

  function pickComputermove() {
    const randomNum = Math.random();
    let computerMove = "";
    if (randomNum >= 0 && randomNum < 1 / 3) {
      computerMove = "rock";
    } else if ((randomNum) => 1 / 3 && randomNum < 2 / 3) {
      computerMove = "paper";
    } else if ((randomNum) => 2 / 3 && randomNum < 1) {
      computerMove = "Scissors";
    }
    return computerMove;
  }