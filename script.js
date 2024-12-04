const display = document.getElementById("display");
const container = document.getElementById("container");

let input = "0";
let value1 = 0;
let value2 = 0;
let op = null;
let result = 0;

function displayNum() {
  display.textContent = input; // makes the display show my input value. it is zero by default
}

function modifyInput(num) {
  if (num === ".") {
    if (input.includes(".")) {
      return; //makes sure that only 1 decimal is allowed
    } else {
      input = input + ".";
      displayNum(); // adds the decimal while preserving the number before even if it was the default input 0
    }
  } else if (input == "0") {
    if (num === "0") {
      input = "0";
      displayNum(); // checks first if the input is the string zero or is 0 and prevents anymore 00
    } else {
      input = num;
      displayNum(); // if the user adds a number for example 5, there should be no 05
    }
  } else {
    input += num;
    displayNum(); // adds to the string since the string is not the default zero
  }
}

function chooseSign() {
  if (input == "0") {
    return input === "0"; // checks first if the input is the string zero or is 0 and denies adjusting the sign if so
  } else if (input[0] !== "-") {
    input = "-" + input;
    displayNum(); // if there is no - then add it to index 0
  } else {
    input = input.slice(1);
    displayNum(); // if there is a - then remove it
  }
}

function clearCalc() {
  input = "0";
  value1 = 0;
  value2 = 0;
  op = null;
  result = 0;
  displayNum(); // resets everything to the starting condition
}

function operate() {
  switch (op) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "/":
      if (value2 === 0) {
        clearCalc();
        alert("you can't divide by Zero");
      } else result = value1 / value2;
      break;
    case "*":
      result = value1 * value2;
      break; //produce result based on v1 and v2
  }
}

function useEqualSign() {
  if (op === null) {
    return; // this doenst calculate if the equal botton is clicked and we dont have an operator to act
  }
  if (input === "") {
    value2 = Number(value1); // if to calculate while v2 is not enetered after choosing an operator, then set v2 = v1
  } else {
    value2 = Number(input); // if operator was chosen and input for v2 was added after
  }
  operate();
  input = result; // set the input to the result value to be ready for input to be added to it or used as is
  value1 = 0; // clean up
  value2 = 0; // clean up
  op = null; // make sure the operator has been deselected after completing the equation and closes the equation
  displayNum();
}

function chooseOpSign(opSign) {
  if (op) {
    useEqualSign(); // calculates if an operator is selected while an equation is already open
    value1 = Number(input); // locks the v1 as the input (the input pooled from the result of the previous equation)
    op = opSign; // opens a new equation with the new operator selected
    input = ""; // clears the input variable ready for v2 handling
  } else {
    value1 = Number(input); // locks the v1 as the input
    op = opSign; // opens a new equation and selects the operator sign
    input = ""; // clears the input variable ready for v2 handling
  }
}
