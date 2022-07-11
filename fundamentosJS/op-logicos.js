/*TABELA_VERDADE

// AND todas as condições precisam ser true

v && v  -> V
v && f -> F
f && ? - > F

// OR ao menos uma condição precisa ser true

v || ? -> V
f || v -> V
f || f -> F

// XOR as condições tem que ser diferente para ser true //OU exclusivo
v  xor v -> F  
v  xor f -> V
f  xor v -> V
f  xor f -> F

// NOT

!v -> F
!f -> V
*/

function compras(trabalho1 , trabalho2) {

  const comprarSorvete = trabalho1 || trabalho2 // se o trab1 for verdadeiro não verifica o trab2
  const comprarTv50 = trabalho1 && trabalho2 // preciso verificar os dois operando , porem se o trab1 for false a condição será falsa
 // const comprarTv32 = !!(trabalho1 ^ trabalho2)// bitwise XOR
  const comprarTv32 = trabalho1 != trabalho2 //podemos simular com !=
  const manterSaudavel =  !comprarSorvete // negação logica de comprar sorvete , operador unario


  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true , true))

console.log(compras(true , false))

console.log(compras(false , true))

console.log(compras(false, false))




