const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");

const openMenu = function () {
  //   burgerMenu.style.display = "block";
  burgerMenu.style.transform = "translateX(0)";
};

const closeMenu = function () {
  //   burgerMenu.style.display = "none";
  burgerMenu.style.transform = "translateX(100%)";
};

openMenuBtn.addEventListener("click", function () {
  openMenu();
});

closeMenuBtn.addEventListener("click", function () {
  closeMenu();
});
