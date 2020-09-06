import displayMessage from './name.js';

const name = document.querySelector('#name');
const nameMessage = "RYAN POON"
displayMessage(nameMessage, name)

// Resume Modal
const modal = document.querySelector('#resume-modal');
const openButton = document.querySelector('#resume-modal-btn');
const closeButton = document.querySelector('#modal-close');

openButton.addEventListener('click', () => {
    modal.style['display'] = 'flex';
});

closeButton.addEventListener('click', () => {
    modal.style['display'] = '';
});