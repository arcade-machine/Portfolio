var modal = document.querySelector(".contacts-write-us");
var popup = document.querySelector(".write_us");
var close = document.querySelector(".modal-close");
var map = document.querySelector(".map-modal");
var mappopup = document.querySelector(".map");
var mapclose = document.querySelector(".map-close");

modal.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write_us-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write_us-show");
});

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("map-show");
});
mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("map-show");
});