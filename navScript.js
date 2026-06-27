const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
});