console.log('a = ',a) // aqui a variavel existe porem seu valor ainda não foi definido

var a = 2// aqui atribuimos valor por isso que adiante será impresso o valor dela
console.log('a = ',a) 


console.log('b = ', b) // o efeito de hosting/isamento quando definimos uma variavel com let não existe
let b = 3
console.log('b = ', b)

// O CONCEITO DE HOSTING É "JOGAR" AS VARIAVEIS COM VAR PARA CIMA O QUE PODE JERAR ALGUNS EFEITOS ESTRANHOS