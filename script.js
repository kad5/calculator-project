let input = "0";
let value1 = 0;
let value2 = 0;
let op = null;
let result = 0;

const display = document.getElementById("display");
const container = document.getElementById("container");

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
  } else if (input === "0") {
    if (num === "0") {
      input = "0";
      displayNum(); // if the user adds another zero, there should be no 00
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
  if (input === "0") {
    return input === "0"; // checks first if the input is the default zero and denies adjusting the sign if so
  } else if (input[0] !== "-") {
    input = "-" + input;
    displayNum(); // if there is no - then add it to index 0
  } else {
    input = input.slice(1);
    displayNum(); // if there is a - then remove it
  }
}
modifyInput(7);
chooseOpSign("+");
modifyInput(7);
chooseOpSign("+");
useEqualSign();
chooseOpSign("+");
chooseOpSign("+");
chooseOpSign("+");
useEqualSign();

console.log(value1);

function chooseOpSign(opSign) {
  if (op) {
    value1 = Number(input);
    useEqualSign();
  } else {
    value1 = Number(input);
    result = Number(input);
    input = "0";
    op = opSign;
  }
}

function clearCalc() {
  input = "0";
  value1 = 0;
  value2 = 0;
  result = 0;
  op = null;
  display.textContent = 0;
}

function useEqualSign() {
  value2 = Number(input);
  operate();
  value1 = 0;
  value2 = 0;
  input = result;
}

function operate() {
  switch (op) {
    case "+":
      result = value1 + value2;
      display.textContent = result;
      break;
    case "-":
      result = value1 - value2;
      display.textContent = result;
      break;
    case "/":
      result = value1 / value2;
      display.textContent = result;
      break;
    case "*":
      result = value1 * value2;
      display.textContent = result;
      break;
  }
}

/*
modifyInput(1);
modifyInput(1);
chooseSign();
chooseSign();
chooseOpSign("-");
modifyInput(5);
operate();
clearCalc();
modifyInput(1);
chooseOpSign("+");
modifyInput(15);
operate();
console.log(value1);

modifyInput(7);
chooseOpSign("*");
modifyInput(9);
chooseOpSign("-");
modifyInput(11);
chooseOpSign("+");
modifyInput(10);
operate();
console.log(result);
*/
