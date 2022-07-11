//operador unario possui um operando ex: !
//operador binario possui dois operando ex: + , -, / ,*
//operador ternario possui tres operando ex: 


// essa const(resultado) recebe uma arrow function(nota) com tres operando(expressão relacional ? condição 1 : condição 2)
                         
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//primeiro op. expressão relacional  nota>=7     se true retorna o segundo e se false retorna o terceiro 
//segundo op. condição 1
//terceiro op. condição 2

console.log(resultado(7.1))
console.log(resultado(6.7))

//outra sintaxe
const result = nota => {
  return nota >= 7 ? 'Aprovado' : 'Reprovado'
}