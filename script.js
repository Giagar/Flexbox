//giving a different class to each div with class = "box"
const arr = "1,2,3,4,5,6,7,8,9,10".split(",");
let i = 0;
document.querySelectorAll(".box").forEach((div => {
    div.classList.add(`box${arr[i]}`);
    i++;  
}));

console.log("Latest version of the file");