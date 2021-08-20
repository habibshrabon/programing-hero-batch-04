// $ cd Module-28/js-string-array/
const products = [
  "Dell hardcore 129 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with black camera",
  "Dell 1X59 Lenobo commercial yoga laptop",
  "LG supernova laptop",
  "HTC low price Phone",
  "Dell Purple color phone with Laptop",
];
const searching = "Dell";

//indexOf

const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    // output.push(product);
  }
}
// console.log(output);

for (product of products) {
  if (product.toLowerCase().includes(searching.toLocaleLowerCase())) {
    // output.push(product);
  }
}
// console.log(output);

//starts with
for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
