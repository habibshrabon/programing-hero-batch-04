//javascript object
//JSON
const user = { id: 11, name: "Gorib Amir", job: "actor" };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  name: "Alia store",
  address: "Ranbir Road",
  profit: 15000,
  products: ["laptop", "mobile", "pepsi"],
  owner: {
    name: "Alia Bhatt",
    profession: "actor",
  },
  isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);
