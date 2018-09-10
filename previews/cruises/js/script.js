var navigation = document.querySelector(".navigation");
var burger = navigation.querySelector(".navigation__burger");

// for no-js devices
navigation.classList.remove("navigation--open");

burger.addEventListener("click", function () {
    if (navigation.classList.contains("navigation--open")) {
        navigation.classList.remove("navigation--open")
    } else {
        navigation.classList.add("navigation--open")
    }
});

// slider

var currentSlide = 1;
showDivs(currentSlide);

function plusDivs(n) {
    showDivs(currentSlide += n);
}

function currentDiv(n) {
    showDivs(currentSlide = n);
}

function showDivs(n) {
    var i;
    var x = document.querySelectorAll(".pop-up__image");
    var dots = document.querySelectorAll(".pop-up__slider-small-image");
    if (n > x.length) {currentSlide = 1}
    if (n < 1) {currentSlide = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[currentSlide-1].style.display = "block";
}

//pop-up
var cruise = document.querySelectorAll(".cruise");
var popUp = document.querySelector(".pop-up");
var abrau = popUp.querySelector(".pop-up__item--abrau");
var closeButton = popUp.querySelector(".pop-up__close");

function openPopUp(item, popUpItem) {
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("click", function (evt) {
           evt.preventDefault();
           popUp.classList.add("pop-up--open");
           popUpItem.classList.add("pop-up__item--open");
        });
    }
}

closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.remove("pop-up--open");
    abrau.classList.remove("pop-up__item--open");
});

openPopUp(cruise, abrau);