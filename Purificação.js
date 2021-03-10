function solucao(stringCorrompida) {
    const caracteres_proibidos = "!@#$%&*()";
    let erro = false;
    let purificado = "";
	for (let i = 0; i < stringCorrompida.length; i++) {
        erro = 0;
        for(let j = 0; j < caracteres_proibidos.length; j ++) {
            if(stringCorrompida[i] === caracteres_proibidos[j]) {
                erro = true;
            }
        }
        if(erro === false) {
            purificado += stringCorrompida[i];
        }
    }
    console.log(purificado);
}