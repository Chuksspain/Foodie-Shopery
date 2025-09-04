const btnNavEL = document.querySelector(".menu-btn");
const headerEL = document.querySelector("header");
btnNavEL.addEventListener('click', function () {
    headerEL.classList.toggle("nav-open")
})