//giving a different class to each div with class = "box"
const arr = "1,2,3,4,5,6,7,8,9,10".split(",");
let i = 0;
document.querySelectorAll(".box").forEach((div => {
    div.classList.add(`box${arr[i]}`);
    i++;  
}));

//#menuButton: toggling the list class "open" by clicking the menu button
$(document).ready(function() {
    $(".toggleNav").on("click", function() {
        $("#nav1 ul").toggleClass("open");
    })
})

