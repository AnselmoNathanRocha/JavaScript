function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-menino.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-menina.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa-mulher.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}