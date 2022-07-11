//Uma operação com op.relacional sempre teremos resultado booleano (true or false)

console.log('01:', '1' == 1) //true pois estamos comparando valores
console.log('02:', '1' === 1) // false - pois alem do valor estamos comparando o tipo
console.log('03: ', '3' != 3)// false - pois o valor é igual
console.log('04: ', '3' !== 3) // true - pois estamos comparando tipos ( string !== number)

console.log ('05: ', 3 < 2) // menor - false
console.log ('06: ', 3 > 2) // maior - true
console.log ('07: ', 3 <= 2)// menor ou igual - false
console.log ('08: ', 3 >= 2)// maior ou igual - true

const d1 = new Date(0)
const d2 = new Date(0)// nesses casos estamos comparando endereços de memoria
console.log('09: ', d1 === d2) // false
console.log('10: ', d1 == d2) //false
console.log('11: ', d1.getTime() === d2.getTime()) // nesse caso é true pois estamos comparando valores no caso numbers

console.log('12: ', undefined == null) // valor igual
console.log('13: ', undefined === null)// tipos diferente