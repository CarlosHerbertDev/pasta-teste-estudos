let nomefilme = 'Harry Potter'

switch(nomefilme) {
    case 'Homem Aranha':
        console.log('Esse é filme do Homem Aranha')
        break
    case 'Homem de Ferro':
        console.log('Esse é filme do Homem de Ferro')
        break
    case 'Deadpool':
        console.log('Esse é filme do Deadpool')
        break
    case 'Harry Potter':
        console.log('Esse é filme do Harry Potter')
        break
    default:
        console.log('Esse é outro fileme')
        break
}

let notafilme = 2

switch(notafilme){
    case 1:
    case 2:
        console.log("Filme Ruim")
        break
    case 3:
    case 4:
        console.log("Filme Mediado")
        break
    case 5:
        console.log("Filme Bom")
        break
    default:
        console.log("Opção inválida!")
        break
}