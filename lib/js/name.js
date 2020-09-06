let displayMessage = (message, domLocation) => {
    let current = 0;
    let addLetter = setInterval(() => {
        domLocation.text(message.slice(0, current + 1) + "_");
        current++;
        if (current == message.length) {
            domLocation.text(domLocation.text().replace('_', ''));
            clearInterval(addLetter)
        }
    }, 120);
}

export default displayMessage;

