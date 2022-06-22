for(var i =0; i < 10; i++){
  console.log(i)
}
console.log('i =',i)// o valor será impresso , pois ao var nao respeita o escopo de bloco;

//EXEMPLO 2

const funcs = []

for(var i = 0; i <10; i++) {
  funcs.push(function(){
    console.log(i)
  })
}
funcs[2]()
funcs[8]()