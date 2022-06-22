console.log(typeof Object)

class Produto {}
console.log(typeof Produto) // qualquer classe que eu crie em JS será uma função

//EXEMPLOS

//funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
} 
imprimirSoma(2,3)
imprimirSoma(2)

// funco com retorno

function soma(a ,b = 1) {
    return a + b;
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())

//Armazenando uma function em uma variavel

const imprimiSoma = function (a, b) {
    console.log(a + b)
}
imprimiSoma(6 , 5)

//Armazenando uma Arrow function em um variavel

const iSoma = (a, b) => {
    return a + b
}
console.log(iSoma(5, 3))

// retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(8, 9))


const imprimir2 = a => console.group(a)
imprimir2('Legal!!')