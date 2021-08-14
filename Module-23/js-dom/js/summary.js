console.log("Summary javascript");

const blogs = document.getElementsByTagName("p");
// console.log(blogs);
for (const blog of blogs) {
  //   console.log(blog);
  blog.style.backgroundColor = "steelblue";
  blog.style.color = "white";
}

const animi = document.getElementById("special-blog");
animi.innerHTML = `
    <h4>Special Inner HTML</h4>
    <div>
        <ul>
            <li>Ami Pari apply korte</li>
        </ul>
    </div>
`;

const friends = document.getElementById("friends");
console.log(friends.children);

const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

//creat element
const friend = document.createElement("li");
friend.innerText = "friend-11";
friends.appendChild(friend);
