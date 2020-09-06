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

export default displayMessage;

