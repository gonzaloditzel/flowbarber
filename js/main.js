const ham = document.querySelector('.navbar__btn');
const enlaces = document.querySelector('.navbar__menu');
const barras = document.querySelectorAll('.navbar__btn span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => child.classList.toggle('animado'));
});
