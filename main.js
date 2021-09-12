const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const menuLinks = document.querySelectorAll(".menu-links");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form__container");

const openMenu = function () {
  burgerMenu.style.transform = "translateX(0)";
};

const closeMenu = function () {
  burgerMenu.style.transform = "translateX(100%)";
};

// Event listeners

openMenuBtn.addEventListener("click", openMenu);

closeMenuBtn.addEventListener("click", closeMenu);

menuLinks.forEach((menu) => {
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      e.target.classList.contains("link") ||
      e.target.classList.contains("menu__link")
    ) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(document.querySelector(".input-name").value);
  console.log(document.querySelector(".input-phone").value);
});
