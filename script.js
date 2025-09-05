const btnEL = document.querySelector(".menu-btn");
const divEL = document.querySelector("div.nav-telephonefour");
btnEL.addEventListener('click', function () {
    divEL.classlist.toggle("nav-open")
})