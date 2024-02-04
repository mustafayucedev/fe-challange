const menuButton = document.querySelector(".mobile-menu > button");
const menuContent = document.querySelector(".mobile-menu-content");

menuButton.addEventListener("click", () => {
    menuContent.classList.toggle("active");
})