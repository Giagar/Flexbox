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

const btnStretch = document.querySelector("#stretch");
const btnCenter = document.querySelector("#center");
const btnSpaceBetween = document.querySelector("#space-between");
const flexContainer = document.querySelector(".flexGridContainer");
const flexItem = document.querySelectorAll(".grid-item");
const flexGridBtn = document.querySelectorAll("grid-btn");

//console.log(flexItem)

btnStretch.addEventListener("click", () => {
    flexItem.forEach(item => item.style.flexGrow = 1);
    //flexGridBtn.forEach(item => item.classList.remove("btnActive"));
    btnStretch.classList.add("btnActive");
});

btnCenter.addEventListener("click", () => {
    flexContainer.style.justifyContent = "center";
    flexItem.forEach(item => item.style.flexGrow = 0);
    //flexGridBtn.forEach(item => item.classList.remove("btnActive"));
    btnStretch.classList.remove("btnActive");
});

btnSpaceBetween.addEventListener("click", () => {
    flexContainer.style.justifyContent = "space-between";
    flexItem.forEach(item => item.style.flexGrow = 0);
});
