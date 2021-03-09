function solucao(jogadas) {
    let a = 0, b = 0;
    for (let i = 0; i < jogadas.length; i++){
        if(jogadas[i] === 0){
            a++;
        }
        else {
            b++;
        }
  }
    if(a === b) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}