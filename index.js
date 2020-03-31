let button = document.querySelector('.button');
let inputMin = document.querySelector('#input-min');
let inputMax = document.querySelector('#input-max');
let inputResultado = document.querySelector('#input-resultado');



button.addEventListener('click', numeroAleatorio);

function numeroAleatorio() {
    let min = parseInt(inputMin.value);
    let max = parseInt(inputMax.value);
    let resultado = getRandomArbitrary(min, max);

    inputResultado.value = resultado

}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  