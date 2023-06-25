import { fadeIn, fadeOut } from "./utils";

Array.from(document.forms).forEach((form) => {
    const formInputs = Array.from(form.querySelectorAll('input'));
    const errorMessage = form.querySelector('.form__error');

    formInputs.forEach((input) => {
        input.addEventListener('input', () => {
            if (errorMessage.style.display === 'block') {
                fadeOut(errorMessage);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        for (let i = 0; i < formInputs.length; i++) {
            if (!formInputs[i].value) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            fadeOut(errorMessage);
            location.reload();
        } else {
            if (errorMessage.style.display !== 'block') {
                fadeIn(errorMessage);
            }
        }
    });
});
