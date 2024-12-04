const container = document.getElementById("container");
const buttons = document.querySelectorAll("button");

let input = "0";
let value1 = 0;
let value2 = 0;
let op = null;
let result = 0;

function displayNum() {
  const display = document.getElementById("display");
  display.textContent = input; // makes the display show my input value. it is zero by default
}

function modifyInput(num) {
  if (num === ".") {
    if (input.includes(".")) {
      return; //makes sure that only 1 decimal is allowed
    } else {
      if (input === "") {
        input = "0.";
      } else {
        input = input + ".";
      }
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
        alert("you can't divide by Zero"); // makes sure you can't divide by zero
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
  input = result.toString(); // set the input to the result value to be ready for input to be added to it or used as is
  value1 = 0; // clean up
  value2 = 0; // clean up
  op = null; // make sure the operator has been deselected after completing the equation and closes the equation
  displayNum();
}

function chooseOpSign(opSign) {
  if (op) {
    useEqualSign(); // calculates if an operator is selected while an equation is already open
  }
  value1 = Number(input); // locks the v1 as the input (the entered or that pooled from the result of prior equation)
  op = opSign; // opens a new equation and selects the operator sign
  input = ""; // clears the input variable ready for v2 handling
}

function backtrack() {
  if (input === "") {
    return;
  } else if (input.length === 2 && input[0] === "-") {
    clearCalc();
    return;
  } else if (input.length < 2) {
    clearCalc();
  } else {
    input = input.slice(0, -1);
    displayNum();
  }
}

function displayOpSing() {
  const opDisplay = document.querySelector;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("number")) {
      num = btn.textContent;
      modifyInput(num);
      return;
    }
    if (btn.classList.contains("js-operator")) {
      sign = btn.textContent;
      chooseOpSign(sign);
      return;
    }
    if (btn.classList.contains("util") && btn.textContent === "AC") {
      clearCalc();
      return;
    }
    if (btn.classList.contains("util") && btn.textContent === "Del") {
      backtrack();
      return;
    }
    if (btn.classList.contains("util") && btn.textContent === "+/-") {
      chooseSign();
      return;
    }
    if (btn.classList.contains("js-equal")) {
      useEqualSign();
      return;
    }
  });
});
