for(let i = 0; i < 10; i++){
  console.log(i)
}
//console.log('i =',i) //aqui acusa um erro pois o let respeita o escopo de bloco , sendo assim a variavel so existe "dentro" do LOOPING FOR




//EXEMPLO 2

const funcs = []

for(let i = 0; i <10; i++) {
  funcs.push(function(){
    console.log(i)
  })
}
funcs[2]()
funcs[8]()