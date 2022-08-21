let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
}