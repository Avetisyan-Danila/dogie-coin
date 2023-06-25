import { fadeIn, fadeOut } from './utils'

document.body.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-popup')) {
        e.preventDefault();

        const popupElement = document.querySelector(`#${e.target.getAttribute('data-popup')}`);
        fadeIn(popupElement, 'flex');
    }

    if (e.target.classList.contains('popup__close')) {
        fadeOut(e.target.closest('.popup'));
    }
});
