let setaDireita = document.querySelector('.seta-direita')
let setaEsquerda = document.querySelector('.seta-esquerda')
let slideRosa = document.querySelector('.slide-rosa')
let slideVerde = document.querySelector('.slide-verde')
let slideLaranja = document.querySelector('.slide-laranja')
let slideAzul = document.querySelector('.slide-azul')


setaEsquerda.classList.add('opacity-seta')


setaDireita.addEventListener('click', function(){

    if (slideRosa.classList.contains('opacity') == false) {
        slideRosa.classList.add('opacity')
        setaEsquerda.classList.remove('opacity-seta')
    } else if(slideVerde.classList.contains('opacity') == false){
        slideVerde.classList.add('opacity')
    } else if(slideLaranja.classList.contains('opacity') == false) {
        slideLaranja.classList.add('opacity')
        setaDireita.classList.add('opacity-seta')
    }
})

setaEsquerda.addEventListener('click', function(){

    if(slideLaranja.classList.contains('opacity')){
        slideLaranja.classList.remove('opacity')
        setaDireita.classList.remove('opacity-seta')
    } else if(slideVerde.classList.contains('opacity')){
        slideVerde.classList.remove('opacity')
    } else if(slideRosa.classList.contains('opacity')){
        slideRosa.classList.remove('opacity')
        setaEsquerda.classList.add('opacity-seta')
    }
})