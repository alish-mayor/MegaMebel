const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const menuLinks = document.querySelectorAll(".menu-links");
const btn = document.querySelector(".btn");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const galleryImg = document.querySelector(".gallery-img");
const dots = document.querySelectorAll(".dot");
const inputPhone = document.querySelector(".input-phone");
const root = document.querySelector(":root");
const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
];
let curIndex = 0;

// Functions
const addPhoneMask = function () {
  const im = new Inputmask("+7 (999) 999 99 99");
  im.mask(inputPhone);
};

const openMenu = function () {
  burgerMenu.style.transform = "translateX(0)";
};

const closeMenu = function () {
  burgerMenu.style.transform = "translateX(100%)";
};

const renderImageAndChangeDot = function (index) {
  galleryImg.setAttribute("src", "");
  galleryImg.setAttribute("src", `assets/images/gallery/${images[index]}`);
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

document.addEventListener("DOMContentLoaded", () => {
  galleryImg.setAttribute("src", `assets/images/gallery/${images[curIndex]}`);
  addPhoneMask();
});
