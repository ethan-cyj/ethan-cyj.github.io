//alert("welcome")

const menuButton = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");
var expanded = menuButton.getAttribute("aria-expanded");
menuContent.style.display = "none";

menuButton.addEventListener("click", (event) => {
    if (menuContent.style.display == "none") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "none";
    }
})
// navbar menu dropdown >>>
//const menuButton = document.getElementById("menu");
//const menuContent = document.getElementById("menu-content");
//var expanded = menuButton.getAttribute("aria-expanded");
//
//menuContent.style.display = "none";
//
//menuButton.addEventListener("click", (event) => {
//    if (expanded == "false") {
//        expanded = "true";
//    } else {
//        expanded = "false";
//    }
//    menuButton.setAttribute("aria-expanded", expanded);
//})
