const func = process.argv[3];
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
let operation;

const calculate = (x, op, y) => {
  const result = op(x, y);
  console.log('result:', result);
};

switch (func) {
  case 'add': case 'subtract': case 'multiply': case 'divide':
    operation = require(`./${func}`);
    calculate(num1, operation, num2);
    break;
  default:
    console.log('invalid operation');
}
