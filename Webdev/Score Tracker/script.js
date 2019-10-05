var playerOneScore = 0;
var playerTwoScore = 0;

var goal = 5;

var gameFinished = false;

function updateScoreBoard() {
  var player1 = document.querySelector("#playerOneScore");
  var player2 = document.querySelector("#playerTwoScore");

  player1.textContent = playerOneScore;
  player2.textContent = playerTwoScore;

  if (gameFinished)
    if (playerOneScore > playerTwoScore)
      player1.style.color = "green";
    else
      player2.style.color = "green";
  else
  {
    player1.style.color = "black";
    player2.style.color = "black";
  }
}

var scoreButtons = document.querySelectorAll(".score");

for (var i = 0; i < scoreButtons.length; i++) {
  scoreButtons[i].addEventListener("click", function() {

    if (!gameFinished)
    {
      if (this.id == "playerOne")
        playerOneScore++;
      else  
        playerTwoScore++;

      if (playerOneScore >= goal || playerTwoScore >= goal)
        gameFinished = true;
        
      updateScoreBoard();
    }
  })
}

var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  playerOneScore = 0;
  playerTwoScore = 0;

  gameFinished = false;

  updateScoreBoard();
})

var goalInput = document.querySelector("input");

goalInput.addEventListener("change", function() {
  goal = goalInput.value;

  document.querySelector("h4").textContent = "Playing to " + goal;
})
