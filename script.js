const burguer = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burguer.addEventListener("click", () => {
    burguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});