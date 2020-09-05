const modal = document.querySelector('#resume-modal');
const openButton = document.querySelector('#resume-modal-btn');
const closeButton = document.querySelector('#modal-close');

openButton.addEventListener('click', () => {
    modal.style['display'] = 'flex';
    // modal.width = document.body.clientWidth;
    console.log(modal.clientWidth)
});

closeButton.addEventListener('click', () => {
    modal.style['display'] = '';
});