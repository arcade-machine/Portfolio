var popUp = document.querySelector(".pop-up");
var floorModal = popUp.querySelector(".warm-floor");
var lightModal = popUp.querySelector(".light");
var temperatureModal = popUp.querySelector(".temperature");

var warmFloor = document.querySelector(".favourite-scripts__item--warm-floor");
var lightItem = document.querySelector(".devices__item--light");
var temperatureItem = document.querySelector(".devices__item--temperature");

var floorButton = floorModal.querySelectorAll(".warm-floor__button");
var lightButton = lightModal.querySelectorAll(".light__button");
var temperatureButton = temperatureModal.querySelectorAll(".temperature__button");

var mainHeader = document.querySelector(".main-header");
var burger = mainHeader.querySelector(".main-header__burger");


openPopUp = function (item, modal) {
    item.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.add("open");
        popUp.classList.add("pop-up--open");
    });
};

closePopUp = function (button, modal) {
    for (var i=0; i < button.length; i++) {
        button[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            modal.classList.remove("open");
            popUp.classList.remove("pop-up--open");
        });
    }
};

navigationOpen = function (button, header) {
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (header.classList.contains("main-header--open-nav")) {
            header.classList.remove("main-header--open-nav")
        } else {
            header.classList.add("main-header--open-nav")
        }
  });
};

openPopUp(warmFloor, floorModal);
openPopUp(lightItem, lightModal);
openPopUp(temperatureItem, temperatureModal);

closePopUp(floorButton, floorModal);
closePopUp(lightButton, lightModal);
closePopUp(temperatureButton, temperatureModal);

navigationOpen(burger, mainHeader);