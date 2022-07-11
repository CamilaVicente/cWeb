//para desestruturar um array usamos []
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7 , 9 , 8] // forma de 
console.log(n1, n3, n5, n6)

//desestruturação aninhadas
const [, [, nota]] = [[, 8, 8 ], [9, 6, 8]]
console.log(nota)