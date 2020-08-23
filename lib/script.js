const name = document.getElementsByClassName('name')[0];
const sub = document.getElementsByClassName('sub-message')[0];

// let nameMessage = 'let name = "RYAN POON";';
let nameMessage = "RYAN POON"


let displayMessage = (message, domLocation) => {
    let current = 0;
    
    let addLetter = setInterval(() => {

        domLocation.innerHTML = message.slice(0, current + 1)+ "_";
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
    icon.style['margin'] = "5px";
}



