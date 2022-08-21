function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    
    if (num.value.length == 0) {
        alert("Digite um número!")
    } else {
        let n = Number(num.value)
        let i = 1
        tab.innerHTML = ''

        while (i <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${n*i}`
            tab.appendChild(item)
            i++

        }
    }
}