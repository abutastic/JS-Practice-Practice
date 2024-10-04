// Random number generation

let randomNum = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
let attemptsUsed = 0;

alert("Let's Play number guessing game. You have 3 attempts.");

while (attempts > 0) {
  let userGuess = prompt("Please guess the number:");

  userGuess = Number(userGuess);

  if (userGuess === randomNum) {
    attemptsUsed++;
    if (attemptsUsed === 1) {
      alert(
        `Congratulations!! you guessed it right, the answer was ${randomNum} and you took only ${attemptsUsed} attempt!`
      );
      break;
    } else {
      alert(
        `Congratulations!! you guessed it right, the answer was ${randomNum} and you took ${attemptsUsed} attempts!`
      );
      break;
    }
  } else {
    attempts--;
    attemptsUsed++;
    if (attempts > 0) {
      alert(`The answer was wrong!! you have ${attempts} attempts left`);
    } else {
      alert(`Game Over!! the correct answer was ${randomNum}`);
    }
  }
}
