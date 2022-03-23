var carta1 = {
    nome:"Sininho",
    imagem: "https://4.bp.blogspot.com/-XBYuCcfiRN0/TgS96N0v6tI/AAAAAAAABI8/_yHiE_7QJeE/s400/sininho+voando1.jpg",
    atributos: {
        Defesa: 9,
        Magia: 10
    }
}

var carta2 = {
    nome:"Vidia",
    imagem: "https://i.pinimg.com/originals/13/64/2a/13642acba7216c72331aebb56ccec4ea.jpg",
    atributos: {
        Defesa: 5,
        Magia: 8
    }
}

var carta3 = {
    nome:"Iridessa",
    imagem: "http://4.bp.blogspot.com/-9iHDcmQE-PE/UjnhNTEicEI/AAAAAAAAMPo/Qml52TYmEXY/s400/color__iridessa_by_eiko8.png",
    atributos: {
        Defesa: 6,
        Magia: 9
    }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

document.querySelector('#btnJogar').disabled = true 


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirCartaJogador()
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")

    for (var i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina){
        alert('Você venceu!')
    } else if(valorCartaMaquina > valorCartaJogador){
        alert('Você perdeu!')
    } else{
        alert('Empatou!')
    }

    console.log(cartaMaquina)
    console.log(atributoSelecionado)
    exibirCartaMaquina()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ' ' +
        cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + 
    '</div>'
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status carta-direita'>"

    var opcoesTexto = ""
    
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " +
        cartaMaquina.atributos[atributo] + "</p>"
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + 
    '</div>'
}