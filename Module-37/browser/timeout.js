function doSomething() {
  console.log("I am coding javascript");
}
console.log("First : ami sober age");
console.log("Second: i am the second person");
// setTimeout(doSomething, 5000);
setTimeout(function () {
  console.log("I am using vs code");
}, 5000);
setTimeout(() => {
  console.log("Exploring MDN articles");
}, 4000);
console.log("third : ami the third person");
