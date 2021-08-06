function lowest(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

const salary = [5000, 2000, 3000, 6000, 1000, 500];
const lowestSalary = lowest(salary);
console.log("lowest salary", lowestSalary);
