function trocar(){

    let elemento = document.querySelector('select').value

    if(elemento == 'desabilitado'){
        document.querySelector('input').disabled = true
        let elemento = document.querySelector('.texto')
        elemento.innerHTML = "DESABILITADO"
        elemento.style.color = "white"
        elemento.style.backgroundColor = "red"

    } else {
        document.querySelector('input').disabled = false
        let elemento = document.querySelector('.texto')
        elemento.innerHTML = ""
        elemento.style.color = "black"
        elemento.style.backgroundColor = "transparent"
    }

}