let input = [];
let value1 = 0;
let value2 = value1 + 0;
let op = null;
let result = 0;

function modifyInput(num) {
  input.push(num);
  console.log(input);
}

function chooseSign() {
  if (input[0] !== "-") {
    input.unshift("-");
  } else {
    input.shift();
  }
  console.log(input);
}

function chooseOpSign(opSign) {
  if (op) {
  } else {
    value1 = Number(input.join(""));
    input = [];
    op = opSign;
    console.log(value1);
    console.log(input);
    console.log(op);
  }
}

function clearCalc() {
  input = [];
  value1;
  value2 = value1 + 0;
  op = null;
  result = 0;
  console.log(result);
}

function resetCalc() {
  input = [];
  value1 = result + 0;
  value2 = value1 + 0;
  op = "";
  result = 0;
  console.log(result);
}

function operate() {
  value2 = Number(input.join(""));
  console.log(input);
  console.log(value2);
  switch (op) {
    case "+":
      result = value1 + value2;
      console.log(result);
      resetCalc();
      break;
    case "-":
      result = value1 - value2;
      console.log(result);
      resetCalc();
      break;
    case "/":
      result = value1 / value2;
      console.log(result);
      resetCalc();
      break;
    case "*":
      result = value1 * value2;
      console.log(result);
      resetCalc();
      break;
  }
}

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
