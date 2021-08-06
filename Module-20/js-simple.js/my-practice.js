// const first=500;
// const second=700;
// const third=900;

function getLargest(first, second, third) {
  if (first > second && first > third) {
    return first;
  } else if (second > third && second > third) {
    return second;
  } else {
    return third;
  }
}

const largestValue = getLargest(500, 600, 800);
console.log(largestValue);
