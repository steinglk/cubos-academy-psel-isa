function solucao(produtos, valorMaximo, avaliacaoMinima) {
    let i = 0, j = 0;
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
