const ham = document.querySelector('.navbar__btn');
const enlaces = document.querySelector('.navbar__menu');
const barras = document.querySelectorAll('.navbar__btn span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => child.classList.toggle('animado'));
});

let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 700 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    }
  }
}

window.addEventListener("scroll", mostrarScroll);