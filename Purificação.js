function solucao(stringCorrompida) {
    const corrompido = "!@#$%&*()";
    let erro = 0;
    let purificado = "";
	for (let i = 0; i < stringCorrompida.length; i++) {
        erro = 0;
        for(let j = 0; j < corrompido.length; j ++) {
            if(stringCorrompida[i] === corrompido[j]) {
                erro = 1;
            }
        }
        if(erro === 0) {
            purificado += stringCorrompida[i];
        }
    }
    console.log(purificado);
}