var myWorksJson = "js/my-works.json";
var myWorksList = document.querySelector(".my-works");
var myWorksTemplate = document.querySelector(".my-works--template");
var cardTemplate = myWorksTemplate.content.querySelector(".my-works__item");

window.load = function() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        try {
            var massive = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                onSuccess(massive);
            }
        } catch (err) {
        }
    });

    xhr.open('GET', myWorksJson);
    xhr.send();
};

const onSuccess = function (data) {
    for (var i = 0; i < data.length; i++) {
        const cardGenerator = cardTemplate.cloneNode(true);

        cardGenerator.querySelector("a:first-of-type").href = data[i].preview;
        cardGenerator.querySelector(".my-works__image").src = data[i].src;
        cardGenerator.querySelector(".my-works__image").alt = data[i].alt;
        cardGenerator.querySelector("a:last-of-type").href = data[i].gitLink;

        myWorksList.appendChild(cardGenerator);
    }
};

window.load();