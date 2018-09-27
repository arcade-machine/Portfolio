var languageJson = "js/language.json";

var languageSection = document.querySelector(".language");
var languageInteractive = languageSection.querySelector(".language__type");
var languageRussian = languageSection.querySelector(".language__language--ru");
var languageEnglish = languageSection.querySelector(".language__language--en");
var languageUrdu = languageSection.querySelector(".language__language--urd");

window.load = function() {
    var language = new XMLHttpRequest();

    language.addEventListener("load", function () {
        try {
            var langType = JSON.parse(language.responseText);
            if (language.status === 200) {
                languageSwitch(langType, languageRussian);
                languageSwitch(langType, languageEnglish);
                languageSwitch(langType, languageUrdu);
            }
        } catch (err) {
        }
    });

    language.open('GET', languageJson);
    language.send();
};

languageInteractive.addEventListener("click", function () {
    if (languageSection.classList.contains("language--open")) {
        languageSection.classList.remove("language--open")
    } else {
        languageSection.classList.add("language--open")
    }
});

var languageSwitch = function(language, langClick) {
    langClick.addEventListener("click", function () {
        for (var i = 0; i < language.length; i++) {
            if (language[i].language === langClick.innerHTML) {
                if (language[i].language === "URD") {
                    document.querySelector(".container").classList.add("container--rtl")
                    document.querySelector(".container__footer").classList.add("container__footer--rtl")
                } else {
                    document.querySelector(".container").classList.remove("container--rtl")
                    document.querySelector(".container__footer").classList.remove("container__footer--rtl")
                }
                languageSection.classList.remove("language--open");
                document.querySelector(".navigation__link--portfolio").textContent = language[i].portfolio;
                document.querySelector(".navigation__link--about-me").textContent = language[i].aboutMe;
                document.querySelector(".navigation__link--contacts").textContent = language[i].linkContacts;
                document.querySelector(".language__type").textContent = language[i].languageType;
                document.querySelector(".bio__name").textContent = language[i].bioName;
                document.querySelector(".bio__location").textContent = language[i].bioLocation;
                document.querySelector(".bio__about").textContent = language[i].bioAbout;
                document.querySelector(".contacts__header").textContent = language[i].contactsHeader;
                document.querySelector(".contacts__email").innerHTML = language[i].contactsEmail;
                document.querySelector(".contacts__phone").innerHTML = language[i].contactsPhone;
            }
        }
    });
};


window.load();