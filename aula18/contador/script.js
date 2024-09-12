let input = document.querySelector('#value')

function maisUm() {
    // Obtém o valor atual e converte para o número
    let valorAtual = Number(input.innerText);
    // Incrementa o valor
    valorAtual += 1;
    // Atualiza o texto do elemento com o novo talor
    input.innerText = valorAtual
}

function menosUm(){
    let valorAtual = Number(input.innerText);
    valorAtual -= 1;
    input.innerText = valorAtual
}