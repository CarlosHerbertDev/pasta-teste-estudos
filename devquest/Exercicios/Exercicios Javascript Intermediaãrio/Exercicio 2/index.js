let lista = [65, 44, 12, 4]

console.log(lista)

lista.forEach(function(item) {
    console.log(item * 10);
})


// poderia ter feito uma arrow function:  numeros.forEach((item) => {console.log(item * 10)