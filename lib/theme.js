const uiMode = document.getElementById('ui-mode');
const navbar = document.getElementsByTagName('nav')[0];
const title = document.querySelector('.title');
const body = document.getElementsByTagName('body')[0]
const projectCard = document.getElementsByClassName('project-card');
const projectButtons = projectCard[0].getElementsByClassName['project-btn']
const skillIcon = document.getElementsByClassName('skills')[0].getElementsByTagName('img');
const social = document.getElementsByClassName('social')[0];

//Dark Mode Settings
const navColor = "#31465c";
const bodyBackground = "#2A3246";
const cardColor = "#37374a";
const shadowColor = "black";
const boxShadow = "10px 10px 10px 1px black";


let changeToDark = () => {
    uiMode.style["background"] = "gray";
    uiMode.style["color"] = "white";
    uiMode.innerHTML = "&#127774";

    title.style["color"] = "white";

    navbar.style["background"] = navColor;

    social.style["background"] = "#A1FFBD";

    body.style["background"] = bodyBackground;

    // body.style["background-image"] = 'gray';
    body.style["color"] = "white";

    for (card of projectCard) {
        card.style["background"] = cardColor;
        card.style["box-shadow"] = "10px 10px 10px 1px black";
        card.style["border"] = "gray";
        card.style["color"] = "lightgray";

        for (btn of card.getElementsByClassName('project-btn')) {
            btn.style["box-shadow"] = boxShadow;
            btn.style["background"] = "#A1FFBD";
        }
    }

    for (icon of skillIcon) {
        icon.style["background"] = cardColor;
        icon.style["box-shadow"] = "10px 10px 10px 1px black";
        icon.style["border-bottom"] = "1px solid black";
        icon.style["border-right"] = "1px solid black"
    }
}


let changeToLight = () => {

    uiMode.style["background"] = "";
    uiMode.style["color"] = "";
    uiMode.innerHTML = "&#127770";

    title.style["color"] = "";

    navbar.style["background"] = "";

    social.style["background"] = "";


    body.style["background"] = "";
    body.style["color"] = "";

    for (card of projectCard) {
        card.style["background"] = "";
        card.style["box-shadow"] = "";
        // card.style["border"] = "none";
        card.style["color"] = "";

        for (btn of card.getElementsByClassName('project-btn')) {
            btn.style["box-shadow"] = "";
            btn.style["background"] = "";
        }
    }

    for (icon of skillIcon) {
        icon.style["background"] = "";
        icon.style["box-shadow"] = "";
    }
}


// changeToDark();

let darkMode = false;


uiMode.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
        changeToDark();
    } else {
        changeToLight();
    }
});