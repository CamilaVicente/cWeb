let num1 = 1
let num2 = 2

num1++ // pos fixada
console.log(num1)
--num1 //pre fixada essa forma tem uma prioridade de execução maior 
console.log(num1)


console.log(++num1 === num2--)
console.log(num1 === num2)

// evitar colocar incremento dentro de uma comparação