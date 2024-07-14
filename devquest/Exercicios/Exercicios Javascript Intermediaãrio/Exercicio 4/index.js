let textodigitado = document.querySelectorAll("input")

console.log(textodigitado.length);

textodigitado.forEach(function(item){

    item.addEventListener("change", function(){

        if(item.classList.contains('verde')){
            item.classList.remove("verde")
        } else {
            item.classList.add("verde")
        }
    })
}) 

// textodigitado..addEventListener("change", function () {
//     alert('oi')
// })