import displayMessage from './name.js';

const nameMessage = "RYAN POON"
displayMessage(nameMessage, $('#name'))

// Resume Modal
const modal = $('#resume-modal');
$('#resume-modal-btn').on('click', () => {
    modal.css('display','flex');
});
$('#modal-close').on('click', () => {
    modal.removeAttr('style');
});