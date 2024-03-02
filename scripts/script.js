const nav = document.querySelector("nav");
const navlist = document.querySelector("nav ul");
const navlinks = document.querySelectorAll("li");
const logo = document.querySelectorAll("nav h4");

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  navlist.classList.toggle("opened");

  navlinks.forEach((li, index) => {
    if (li.style.animation) {
      li.style.animation = "";
      console.log("has anim");
    } else {
      li.style.animation = `fade 0.3s forwards ease ${index / 7 + 0.3}s`;
      console.log("does NOT have anim");
    }
  });
  hamburger.classList.toggle("toggle");
});

// Change Nav color and Nav link color

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() + 920);
  });
});

// Change hamburger color

$(function () {
  $(document).scroll(function () {
    var $bar = $(".bar");
    $bar.toggleClass("scrolled", $(this).scrollTop() > $nav.height() + 920);
  });
});