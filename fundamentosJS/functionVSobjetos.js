console.log(typeof Object) // isso se trata de um função
console.log(typeof new Object) // aqui estamos 'chamando' a funcao posso ou não por os (); 
//estamos instanciando um funcao agora temos um objeto criado á partir de uma funcao


const Cliente = function() {} //aqui criei uma funcao e atribui ela a uma variavel
console.log(typeof Cliente)
console.log(typeof new Cliente)


class Produto {} // criar uma classe é uma forma diferente de voce construir uma função //ES 2015(ES6)
console.log(typeof Produto)
console.log(typeof new Produto())