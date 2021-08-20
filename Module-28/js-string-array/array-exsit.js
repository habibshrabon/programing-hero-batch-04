function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "Please Provide a array of friends";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["Habib", "Ahsan", "shamol", "sabbir"];
const myBigFriend = megaFriend(friends);
// console.log(myBigFriend);

if (friends.indexOf("Habib") != -1) {
  //   console.log("Habib exists");
}

//includes
if (friends.includes("Habib")) {
  //   console.log("Habib exits using includes");
}

//concat
const first = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const second = [1, 2, 3, 4, 5, 6, 7];
const combined = first.concat(second);
console.log(combined);
