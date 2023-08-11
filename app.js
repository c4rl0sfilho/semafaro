'use strict'

const green = document.getElementById('green')
const yellow = document.getElementById('yellow')
const red = document.getElementById('red')

function vermelho(){
    yellow.classList.add('black')
    green.classList.add('black')

    red.classList.remove('black')
}
function verde(){
    yellow.classList.add('black')
    red.classList.add('black')

    green.classList.remove('black')
}
function amarelo(){
    red.classList.add('black')
    green.classList.add('black')

    yellow.classList.remove('black')
}


red.addEventListener('click', vermelho)
green.addEventListener('click', verde)
yellow.addEventListener('click', amarelo)