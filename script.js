var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var logoIcon = document.querySelector(".logo-icon");


menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

logoIcon.onclick = function () {

}