
const primaryNav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener('click',() => {
    let visibilty = menuBtn.getAttribute("data-visibilty");
    if (visibilty === "false") {
        menuBtn.setAttribute("data-visibilty",true);
        primaryNav.setAttribute("aria-expanded",true);
    }
    else if (visibilty=== "true") {
        menuBtn.setAttribute("data-visibilty",false);
        primaryNav.setAttribute("aria-expanded",false);
    }
});