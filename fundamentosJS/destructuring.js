// para desestruturar um objeto usamos {}
//para desestruturar um array usamos []

const pessoa = {
  nome: 'Pedro',
  idade:32,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

const { nome, idade } = pessoa // forma de tirar varios atribudos de dentro de um objeto
console.log(nome, idade)

const { nome: n, idade:i } = pessoa // podemos criar chaves : valor
console.log( n , i) 

const { sobrenome , bemHumorada = true }  = pessoa // quando declaramos algo que nao existe dentro de "pessoa" o retorno é undefined 
console.log(sobrenome , bemHumorada)

const { endereco: { logradouro , numero , cep }} = pessoa // acessando um objeto aninhado
console.log( logradouro,numero , cep)

const { conta: {ag , num}} = pessoa // tomar cuidado para não tentar acessar atributos que não existem dentro do objeto
console.log(ag, num)