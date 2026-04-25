function toggleMenu() {
    const menu = document.querySelector(".menu-content");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

/* Fecha o menu se clicar fora */
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu-content");
    const button = document.querySelector(".menu-button");

    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});
