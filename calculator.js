// Mathematical operations

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return `cannot divide ${num1} by 0`;
  } else {
    return num1 / num2;
  }
}

function remainder(num1, num2) {
  return num1 % num2;
}

let calculateAgain = true;

while (calculateAgain) {
  let option;
  let validOption = false;
  let num1;
  let num2;
  let validnum1 = false;
  let validnum2 = false;

  while (!validOption) {
    option = prompt(
      `Please choose a mathematical operation: add = 1, multiply = 2, subtract = 3, divide = 4 or remainder = 5?`
    );
    if (["1", "2", "3", "4", "5"].includes(option)) {
      validOption = true;
    } else {
      alert(`Invalid option: Please choose a valid mathematical operation`);
    }
  }

  while (!validnum1) {
    num1 = parseFloat(prompt(`Please enter 1st number:`));
    if (!isNaN(num1)) {
      validnum1 = true;
    } else {
      alert(`Please enter a valid 1st number`);
    }
  }

  while (!validnum2) {
    num2 = parseFloat(prompt(`Please enter 2nd number:`));
    if (!isNaN(num2)) {
      validnum2 = true;
    } else {
      alert(`Please enter a valid 2nd number`);
    }
  }

  let result;
  let message;

  if (option === "1") {
    result = add(num1, num2);
    message = `Adding:`;
  } else if (option === "2") {
    result = multiply(num1, num2);
    message = `Multiplying:`;
  } else if (option === "3") {
    result = subtract(num1, num2);
    message = `Subtracting:`;
  } else if (option === "4") {
    result = divide(num1, num2);
    message = `Dividing:`;
  } else if (option === "5") {
    result = remainder(num1, num2);
    message = `Remainder of:`;
  }

  alert(`${message} ${num1} with ${num2} = ${result}`);

  calculateAgain = confirm(`Do you want to calculate again?`);
}

alert(`Thanks for using the calculator`);
