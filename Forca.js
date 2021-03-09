function solucao(palpite, palavra) {
    let acertos = 0;
	for ( let i = 0; i < palavra.length; i++){
        if (palpite === palavra[i]) {
            acertos++;
        }
    }
    console.log(acertos);
}