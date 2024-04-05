
var vetor=[]

function Adicionar(){
    var n = window.document.querySelector('#numero')
    var msgadd= window.document.querySelector('#vetor')
    var num = Number(n.value)
  


    vetor.push(num)
    msgadd.innerHTML += `Valor ${num} adicionado ao vetor\n`

    n.value = ''
}

function Finalizar(){
    var dados = window.document.querySelector('.dadosvetor')


    dados.innerHTML += `O vetor possui ${vetor.length} numeros</br>`
    dados.innerHTML += `O maior valor informado foi ${Math.max.apply(null, vetor)}</br>`
    dados.innerHTML += `O menor valor informado foi ${Math.min.apply(null, vetor)}</br>`

    //var total = vetor.reduce(function(total, numero){
    //    return total + numero
    //}, 0 );
    //dados.innerHTML += `Somando todos os valores, temos ${total}\n`

    var soma = 0 
    
    for(var i=0; i<vetor.length; i++){
        soma += vetor[i]
            
    }
        dados.innerHTML += `Somando todos os valores, temos ${soma}</br>`
    
    
        dados.innerHTML += `A media dos valores digitados é ${soma/vetor.length}</br>`
    
}