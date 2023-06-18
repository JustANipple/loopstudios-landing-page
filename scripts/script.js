const icon = document.querySelector(".menu_icon");
const menu = document.querySelector(".nav");
const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list li");
const xmarkUrl = "images/icon-close.svg";
const hamburgerUrl = "images/icon-hamburger.svg";

icon.addEventListener("click", (e) => {
    if(menu.classList.contains("open")) {
        menu.classList.remove("open");
        for(const item of listItems) {
            item.classList.remove("slide");
        }
        icon.setAttribute("src", hamburgerUrl);
    } else {
        menu.classList.add("open");
        for(let i = 0; i < listItems.length; i++) {
            setTimeout(function() {
                listItems[i].classList.add("slide");
            }, 150 * i);
        }
        icon.setAttribute("src", xmarkUrl);
    }
});