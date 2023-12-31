const optionsList = ["Rock", "Paper", "Scissors"]



function pcJoga() {
  const randomIndex = Math.floor(Math.random() * optionsList.length);
  return optionsList[randomIndex];

}




function humanPlay() {
  let answer = prompt("Rock, Paper or Scissors?")
    answer = capitalizeFirstLetter(answer)

    while (!isValidChoice(answer)) {
    alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
    answer = prompt("Rock, Paper or Scissors?");
    answer = capitalizeFirstLetter(answer);
  }

return answer;
}



let human_player_score = 0;
let pc_player_score = 0;

function gameLogic(human_player, pc_player) {
  if (human_player == pc_player){
    console.log("Its a tie!")
  }

  else if (
    (human_player === "Rock" && pc_player === "Scissors") ||
    (human_player === "Scissors" && pc_player === "Paper") ||
    (human_player === "Paper" && pc_player === "Rock")
  ) {
  console.log("You win!");
  human_player_score += 1;
  } else {
    console.log("Computer wins!");
    pc_player_score += 1;
  }
  console.log(`Human Player Score: ${human_player_score}`);
  console.log(`Computer Player Score: ${pc_player_score}`);
  }


function capitalizeFirstLetter(str) {
return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function isValidChoice(choice) {
const validChoices = ["Rock", "Paper", "Scissors"];
return validChoices.includes(choice);
}

document.getElementById("rockBtn").addEventListener("click", function () {
gameLogic("Rock", pcJoga());
});

document.getElementById("paperBtn").addEventListener("click", function () {
gameLogic("Paper", pcJoga());
});

document.getElementById("scissorsBtn").addEventListener("click", function () {
gameLogic("Scissors", pcJoga());
});
