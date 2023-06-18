const icon = document.querySelector(".menu_icon");
const menu = document.querySelector(".nav");
const xmarkUrl = "images/icon-close.svg";
const hamburgerUrl = "images/icon-hamburger.svg";

icon.addEventListener("click", (e) => {
    if(menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.setAttribute("src", hamburgerUrl);
    } else {
        menu.classList.add("open");
        icon.setAttribute("src", xmarkUrl);
    }
});