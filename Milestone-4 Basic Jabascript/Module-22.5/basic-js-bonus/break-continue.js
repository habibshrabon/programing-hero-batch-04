const products = [
  { name: "Laptop Dell", price: 43000 },
  { name: "sumsung", price: 30000 },
  { name: "Nokia phone", price: 25000 },
  { name: "apple smart watch", price: 20000 },
  { name: "Lg smart phone", price: 10000 },
  { name: "Old land phone", price: 5000 },
];

// for (const product of products) {
//   if (product.price < 10000) {
//     break;
//   }
//   console.log(product);
// }

for (const product of products) {
  if (product.price < 10000) {
    continue;
  }
  console.log(product);
}
