// Podemos usar a desestruturação como parametro de uma function
// usando um objeto
function rand ({ min = 0, max = 1000 }) { // aqui estou passando um objeto para essa funcao e ao inves de acessar o objeto.min(forma padrao)  ele já irá trazer e os atributos prontos
  const valor = Math.random() * (max -min) + min
  return Math.floor(valor)
}

console.log(rand({ max: 40 , min: 50}));

//poderia fazer 
const obj = { max: 40 , min: 50}
console.log(rand(obj))
console.log(rand({ min : 955}))// aqui gera numeros entre o min que definimos e o max que já havia sido declarado
console.log(rand({})) // ele irá gerar numero aleatorios entre o min e max.
//console.log(rand()) // aqui quebra pois ele tentara desestruturar algo que esta NULL ou UNDEFINED