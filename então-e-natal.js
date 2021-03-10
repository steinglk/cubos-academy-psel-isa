function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    let i = 0, total = 0;
    let freteg = false;
    // O laço a seguir percorre a lista recebida como parâmetro, 
    // e calcula um total parcial de cada produto e aplica o desconto de acordo com a categoria.
    for(i = 0; i < produtos.length; i ++) {
        totalp = 0;
        p1 = produtos[i];
        totalp += (p1["valor"] * p1["quantidade"]);
        if (p1["categoria"] === "BEBIDA") {
            totalp -= totalp*(30/100);
        }
        else if (p1["categoria"] === "DOCE") {
            totalp -= (totalp*(15/100));
        }
        else if (p1["categoria"] === "SALGADO") {
            totalp -= (totalp*(10/100));
        }
        // após o desconto aplicado soma-se o valor ao total.
        total += totalp;
    }
    // conferir se é a primeira compra do usuario, caso seja true, irá conferir e calcular o desconto.
    // caso contrário não é acionado nenhum cupom e já vai para calcular o frete.
    if(ehPrimeiraCompra === true){
        if (cupomDesconto === "NATAL10"){
            if(total > 3000) {
                total -= (total*(10/100));
            }
        } else 
            if(cupomDesconto === "NATAL20"){
                if(total > 4500) {
                    total -= (total*(20/100));
            }
        } else 
            if (cupomDesconto === "NATAL30") {
                if(total > 6000) {
                    total -= (total*(30/100));
            }
        } else 
            if (cupomDesconto === "NATALSUPREMO") {
                if(total > 8000) {
                    total -= (total*(30/100));
                    freteg = true;
            } 
        }
    }
    // Conferir se algum cupom de frete gratis foi validado.
    if(freteg === true) {
        console.log(total);
    }
    // Caso não, calcular o valor do frete e somar ao total.
    else {
        total += (distanciaRestaurante*120);
        console.log(total);
    }
}