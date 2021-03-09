function solucao(precos) {
    let menor_diferenca = 9999;
    for(let i = 0; i < precos.length; i ++) {
        for (let j = i+1; j < precos.length; j++) {
            if((precos[i] - precos[j]) < menor_diferenca && (precos[i] - precos[j]) > 0) {
                menor_diferenca = precos[i] - precos[j];
            }
        }
  }
    console.log(menor_diferenca);
}