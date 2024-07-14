
document
    .querySelector('button')
    .addEventListener('click', function() {
        let mudarCor = document.querySelector('.azul') 
          
        mudarCor.classList.remove('azul')
        mudarCor.classList.add('amarelo')

    })