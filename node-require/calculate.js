const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
const func = process.argv[3];
const operation = require(`./${func}`);

const calculate = (x, func, y) => {
  const result = operation(x, y);
  console.log('result:', result);
};

calculate(num1, operation, num2);
