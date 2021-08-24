const friends = ["Tom Hanks", "Tom cruise", "Tom brady", "Tom Solaiman"];

const fLengths = friends.map((friend) => friend.length);
// console.log(fLengths);

const products = [
  { name: "water bottel", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const productName = products.map((product) => product.name);
const productPrice = products.map((product) => product.price);
// products.map((product) => console.log(product));
products.forEach((product) => console.log(product));
// console.log(productName, productPrice);
