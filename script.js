//giving a different class to each div with class = "box"
const arr = "1,2,3,4,5,6,7,8,9,10".split(",");
let i = 0;
document.querySelectorAll(".box").forEach((div => {
    div.classList.add(`box${arr[i]}`);
    i++;  
}));

$(document).ready(function() {
    $(".toggleNav").on("click", function() {
        console.log("ok")
        $("#nav1 ul").toggleClass("open");
    })



})


