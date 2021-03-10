function solucao(produtos, valorMaximo, avaliacaoMinima) {
    let i = 0, j = 0;
    // A variavel i servirá para percorrer a lista de produtos
    // A variavel j servirá como referência de indice da nova lista com produtos que passaram pelas condições
    let valor = produtos[0];
    let arr = [];
    for (i = 0; i < produtos.length; i++) {
        valor = produtos[i];
        if (valor["valor"] <= valorMaximo && valor["avaliacao"] >= avaliacaoMinima) {
            arr[j] = valor;
            j++;
        } 
    }
    console.log(arr);
}
