function pegarNome(){
    let nome = document.querySelector('#inserir').value

const paragrafo = document.createElement('p')

nomeinserido = document.createElement('lista')

nomeinserido.innerText = nome

document.body.appendChild(paragrafo)
document.body.appendChild(nomeinserido)

document.querySelector('#inserir').value = ''
}