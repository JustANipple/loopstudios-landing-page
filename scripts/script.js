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
            }, 100 * i);
        }
        icon.setAttribute("src", xmarkUrl);
    }
});

const creationsCont = document.querySelector(".creations_wrapper");
const mobImages = [
    "images/mobile/image-deep-earth.jpg",
    "images/mobile/image-night-arcade.jpg",
    "images/mobile/image-soccer-team.jpg",
    "images/mobile/image-grid.jpg",
    "images/mobile/image-from-above.jpg",
    "images/mobile/image-pocket-borealis.jpg",
    "images/mobile/image-curiosity.jpg",
    "images/mobile/image-fisheye.jpg"
];
const desImages = [
    "images/desktop/image-deep-earth.jpg",
    "images/desktop/image-night-arcade.jpg",
    "images/desktop/image-soccer-team.jpg",
    "images/desktop/image-grid.jpg",
    "images/desktop/image-from-above.jpg",
    "images/desktop/image-pocket-borealis.jpg",
    "images/desktop/image-curiosity.jpg",
    "images/desktop/image-fisheye.jpg"
];
const titles = [
    "deep earth",
    "night arcade",
    "soccer team vr",
    "the grid",
    "from up above vr",
    "pocket borealis",
    "the curiosity",
    "make it fisheye"
];

for(let i = 0; i < titles.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "creation_block");
    wrapper.innerHTML = 
    `
    <picture>
    <source
    srcset=${desImages[i]}
    media="(min-width: 768px)">
    <img 
    src=${mobImages[i]}
    alt=""
    aria-hidden="true">
    </picture>
    <h3 class="title">${titles[i]}</h3>
    `;
    creationsCont.appendChild(wrapper);
}
