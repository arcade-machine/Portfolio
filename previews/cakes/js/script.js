var menuOpen = document.querySelector(".header__burger");
var menu = document.querySelector(".main-navigation");
var nojs = document.querySelector(".header");
var sliderOne = document.querySelector(".size__item--1kg");
var sliderTwo = document.querySelector(".size__item--2kg");
var oneKilo = document.getElementById("1kg");
var twoKilo = document.getElementById("2kg");


nojs.classList.remove("header__no-js");

menuOpen.addEventListener("click", function(evt) {
    if (menu.classList.contains("main-navigation__close")) {
        menu.classList.remove("main-navigation__close");
        menu.classList.add("main-navigation__open");
    } else {
        menu.classList.add("main-navigation__close");
        menu.classList.remove("main-navigation__open");
    }
});

// oneKilo.addEventListener("change", function() {
//     if (oneKilo.checked) {
//         sliderOne.classList.add("size__item--current");
//     } else {
//         sliderOne.classList.remove("size__item--current");
//     }
// });
//
// twoKilo.addEventListener("change", function() {
//     if (twoKilo.checked) {
//         sliderTwo.classList.add("size__item--current");
//     } else {
//         sliderTwo.classList.remove("size__item--current");
//     }
// });