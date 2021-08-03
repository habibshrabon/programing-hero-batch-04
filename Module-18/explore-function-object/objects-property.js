var computer = {
  price: 29000,
  storage: "500gb",
  color: "silver",
  processor: "Intel i5",
};
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;

//set a object property value
computer.price = 22000;
// console.log(computer);
// console.log(computerPrice);

//different ways to set a vlaue of an object property
var priceProperty = "price";
computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 19000;

var storageProperty = "storage";
computer[storageProperty] = "512gb";

computer["storage"] = "1tr";
console.log(computer);
