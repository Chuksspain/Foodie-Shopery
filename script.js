function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    const btn = document.querySelector(".menu-btn");
    // const headerEL = document.querySelector("header.main-headie");
    btnNavEL.addEventListener('click', function () {
        toggle("nav-open")
    })

}