let input = [];
let value1;
let value2;
let op;
let result = 0;

function modifyInput(num) {
  input.push(num);
}

modifyInput(1);
modifyInput(1);

console.log(input);

function addOp(opSing) {
  value1 = Number(input.join(""));
  input = [];
  op = opSing;
}

addOp("-");
console.log(input);
console.log(value1);

modifyInput(5);

console.log(input);

operate();

function operate() {
  value2 = Number(input.join(""));
  switch (op) {
    case "+":
      result = value1 + value2;
      console.log(result);
      break;
    case "-":
      result = value1 - value2;
      console.log(result);
      break;
    case "/":
      result = value1 / value2;
      console.log(result);
      break;
    case "*":
      result = value1 * value2;
      console.log(result);
      break;
  }
}
