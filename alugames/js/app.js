function alterarStatus(id){
 let gameClicado = document.getElementById(`game-${id}`);
 let imagem = gameClicado.querySelector('.dashboard__item__img');
 let botao = gameClicado.querySelector('.dashboard__item__button');
 let nome = gameClicado.querySelector('.dashboard__item__name')
 let numeroDevolucao = 0
if(imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar'
    alert(`Voce devolveu o jogo ${nome.textContent}`)
    numeroDevolucao ++
} else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver'
}
}