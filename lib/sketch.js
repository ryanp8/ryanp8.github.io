const name = document.getElementsByClassName('name')[0];
const sub = document.getElementsByClassName('sub-message')[0];

let nameMessage = "RYAN POON";
let subMessages = ["Python", "Javascript", "HTML", "CSS"];


let displayMessage = (message, domLocation) => {
    let current = 0;
    
    let addLetter = setInterval(() => {

        domLocation.innerHTML = message.slice(0, current + 1)+ "|";
        current++;

        if (current == message.length) {
            domLocation.innerHTML = domLocation.innerHTML.slice(0, -1)
            clearInterval(addLetter)
        }

    }, 120);
}

displayMessage(nameMessage, name)


const mainIcons = document.getElementsByClassName('main-icon')
for (icon of mainIcons) {
    icon.style['margin'] = "20px";
}


const uiMode =  document.getElementById('ui-mode');
const navbar = document.getElementsByTagName('navbar')[0];
const body = document.getElementsByTagName('body')[0]
const projectCard = document.getElementsByClassName('project-card');
const projectButtons = projectCard[0].getElementsByClassName['project-btn']
const skillIcon = document.getElementsByClassName('skills')[0].getElementsByTagName('img');
const social = document.getElementsByClassName('social')[0];

const navColor = "#31465c";
const bodyBackground = "#2A3246";
const cardColor = "#37374a";  
const shadowColor = "black";
const boxShadow = "10px 10px 10px 1px black";

let darkMode = false;

let changeToDark = () => {
    uiMode.style["background"] = "gray";
    uiMode.style["color"] = "white";
    uiMode.innerHTML = "&#127774";

    name.style["color"] = "white";

    navbar.style["background"] = navColor;

    social.style["background"] = "#A1FFBD";

    body.style["background"] = bodyBackground;
    // body.style["background-image"] = `linear-gradient(${cardColor}, ${bodyBackground})`
    body.style["background-image"] = `linear-gradient(to bottom right, gray, ${cardColor})`;
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
    }
}




let changeToLight = () => {

    uiMode.style["background"] = "";
    uiMode.style["color"] = "";
    uiMode.innerHTML = "&#127770";

    name.style["color"] = "";

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


changeToDark();

uiMode.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
        changeToDark();
    } else {
        changeToLight();
    }
});
