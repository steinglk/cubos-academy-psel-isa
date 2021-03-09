function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    let i = 0, total = 0;
    let freteg = false;
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
        total += totalp;
    }
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
    if(freteg === true) {
        console.log(total);
    }
    else {
        total += (distanciaRestaurante*120);
        console.log(total);
    }
}