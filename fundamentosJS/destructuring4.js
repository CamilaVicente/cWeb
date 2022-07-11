// usando o destructuring como parametro de function
// usando ARRAY

function rand([ min = 0 , max = 1000]) {// uma vez que vc desestruturou vc não recebe um array e sim dois atributos no caso min e max

  if (min > max) [min, max] =  [max, min] // criando um novo array 
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor) // floor arredonda para baixo
}

console.log(rand([ 50 , 40]))
console.log(rand([992])) // rand é a function
console.log(rand([ , 10]))
console.log(rand([]))
