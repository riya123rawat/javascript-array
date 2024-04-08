const daysOfWeek = ["Monday", "Tuesday","wednesday","Thursday","friday","Saturday","Sunday"];
console.log(daysOfWeek[3]);

//Ex #02:

const fivePosts =["Walking","Swimming","Dancing","Gym","Running"];
console.log(fivePosts[2]);
fivePosts[2]="Activities";
console.log(fivePosts[2]);



//Ex # 3

const fourposts = ["Walking","swimming","dancing","Gym"];
console.log("fourPosts");
const temporaryContainer = "fourPosts"[0];
fourPosts[0] = fourPosts[1]; 
fourPosts[1] = "temporaryContainer";
console.log(fourPosts);


// Ex # 4

const posts = [];
console.log(posts);
posts.push("Play");
console.log(posts);
posts.push("Eat");
console.log(posts);
posts.push("Sleep");
console.log(posts);


//Ex # 5

const answer = document.getElementById("Answer");
answer.innerHTML = `By using shift method we could return top most priority task while removing it.
And By using pop method we could return lowest priority task while removing it.`;
console.log(answer.innerHTML);








 





