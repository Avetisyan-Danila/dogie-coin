const burgerMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.header__nav-menu');
const body = document.querySelector('.page-body');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger--active');
    navMenu.classList.toggle('header__nav-menu--active');
    body.classList.toggle('lock');
});
