const openModalButton = document.querySelector('.open-modal-button');
const modalContainer = document.querySelector('.modal-container');
const closeButton = document.querySelector('.close-button');

openModalButton.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
