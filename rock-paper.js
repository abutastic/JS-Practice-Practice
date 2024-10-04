const options = ["rock", "paper", "scissor"];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function game(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) { return `Congratulations you won!!`
  } else if(userChoice === computerChoice){
    return `Ohh! it's a tie.`
  } else{
    return `Sorry you lost it`
  }
}

let playAgain = true;

while(playAgain){
    let userChoice = prompt("Please enter rock paper or scissor").toLowerCase();

    if(!options.includes(userChoice)){
        alert(`Please enter a valid option`);
        continue;
    }

    let compChoice = computerChoice ();

    let result = game(userChoice, compChoice);

    alert(`Your option: ${userChoice} \n Computer option: ${compChoice} \n ${result}`)

    playAgain = confirm("Do you want to play again?")
}

alert("Thanks for playing!")
