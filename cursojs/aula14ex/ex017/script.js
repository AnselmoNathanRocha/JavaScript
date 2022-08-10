function carregar() {
let msg1 = document.getElementById('msg1')
let msg2 = document.getElementById('msg2')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg1.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = '../imagens/dia.jpg'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = '<p><strong>BOM DIA!🌄</strong></p>'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = '../imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = '<p><strong>BOA TARDE!☀️</strong></p>'
    } else {
        //BOA NOITE
        img.src = '../imagens/noite.jpeg'
        document.body.style.background = '#515154'
        msg2.innerHTML = '<p><strong>BOA NOITE!🌙</strong></p>'
    }
}