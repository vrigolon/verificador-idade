function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Nao nasceu ainda, tente outro ano')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'images/crianca-homem.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'images/jovem-homem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto-homem.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'images/idoso-homem.png')

            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'images/crianca-mulher.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'images/jovem-mulher.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto-mulher.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'images/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'

        res.innerHTML = `Voce é ${genero} e tem ${idade} anos`
        res.appendChild(img)
    }
}