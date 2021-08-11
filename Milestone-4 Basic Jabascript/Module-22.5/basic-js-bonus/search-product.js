const products = [
  { name: "Laptop Dell", price: 43000 },
  { name: "sumsung", price: 30000 },
  { name: "Nokia phone", price: 25000 },
  { name: "apple smart watch", price: 20000 },
  { name: "Lg smart phone", price: 10000 },
  { name: "Old land phone", price: 5000 },
];

function searchProducts(products, searchText) {
  const matched = [];
  for (const product of products) {
    const name = product.name;
    if (name.indexOf(searchText) != -1) {
      matched.push(product);
    }
  }
  return matched;
}

const match = searchProducts(products, "phone");
console.log(match);
