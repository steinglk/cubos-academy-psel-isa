function solucao(ganhos, serasaScore, mesesParaPagar) {
    let parcela;
    if (serasaScore < 300 ) {
        parcela = (ganhos*3 + (ganhos* (3/100)))/mesesParaPagar;
    }
    else if (serasaScore <700 ) {
        parcela = (ganhos*3 + (ganhos* (9/100)))/mesesParaPagar;
    }
    else {   
        parcela = (ganhos*3 + (ganhos* (15/100)))/mesesParaPagar;
    }
    console.log(parcela);
}