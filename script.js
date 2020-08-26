const api = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/'
const botao = document.querySelector('#iniciarBusca')

var nome = document.querySelector('#nome')
var localidade = document.querySelector('#localidade')

botao.addEventListener('click', function buscarNomes() {
  fetch(`${api}${nome.value}?localidade=${localidade.value}`)
  .then((Response =>{
    return Response.json()
  }))
  .then((data =>{
    console.log(data[0])
    console.log(data[0].res)
    document.querySelector('#nomeD').innerHTML += `: ${data[0].nome}`
    document.querySelector('#localidadeD').innerHTML += `: ${data[0].localidade}`
    document.querySelector('#frequencia').innerHTML += `: ${data[0].res[6].frequencia}`
    document.querySelector('#frequenciaa').innerHTML += `: ${data[0].res[7].frequencia}`
    document.querySelector('#frequenciaaa').innerHTML += `: ${data[0].res[8].frequencia}`
  }))
})

