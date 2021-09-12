const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const menuLinks = document.querySelectorAll(".menu-links");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form__container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const galleryImg = document.querySelector(".gallery-img");
const dots = document.querySelectorAll(".dot");
const images = [
  "6.jpg",
  "12.jpg",
  "30-1.jpg",
  "79b757f9c3e40ebe2acb0b3ceb1c885aa515e4fa_optimizm.jpg",
  "15737.750@2x.jpg",
  "dsv-stenka-ronda-3_enl.jpg",
  "Mebel.jpg",
  "kuhonnaya-mebel.jpg",
];
let curIndex = 0;

const openMenu = function () {
  burgerMenu.style.transform = "translateX(0)";
};

const closeMenu = function () {
  burgerMenu.style.transform = "translateX(100%)";
};

const renderImageAndChangeDot = function (index) {
  galleryImg.setAttribute("src", `assets/images/${images[index]}`);
  dots.forEach((dot) => {
    dot.classList.remove("dot_active");
  });
  dots[index].classList.add("dot_active");
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

leftArrow.addEventListener("click", function () {
  if (curIndex === 0) {
    curIndex = images.length - 1;
  } else {
    curIndex--;
  }

  renderImageAndChangeDot(curIndex);
});

rightArrow.addEventListener("click", function () {
  if (curIndex === images.length - 1) {
    curIndex = 0;
  } else {
    curIndex++;
  }

  renderImageAndChangeDot(curIndex);
});

document.addEventListener("DOMContentLoaded", () =>
  galleryImg.setAttribute("src", `assets/images/${images[curIndex]}`)
);
