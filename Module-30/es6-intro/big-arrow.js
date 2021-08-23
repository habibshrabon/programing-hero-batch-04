const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);

const fiveTimes = (num) => num * 5;
const outPut = fiveTimes(17);

const tenTimes = (num) => num * 10;
const value = tenTimes(17);

const getName = () => "Brandon sam";
const name = getName();
console.log(name);

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum + diff;
  const outPut = result * 5;
  return outPut;
};
const total = doMath(12, 5);
console.log(total);
