function solucao(velocidade, aceleracao, distanciaObjeto) {
    let distancia = (-1* velocidade*velocidade)/(2*aceleracao);
    // conferindo se a distancia que ainda será percorrida É MENOR que a distancia de colisão.
      if (distancia > distanciaObjeto) {
          console.log("COLISAO A FRENTE");
      }
      // conferindo caso as distancias sejam iguais
      else if (distancia === distanciaObjeto) {
          console.log("NAO ACELERE");
      }
      // Se as duas condições anteriores retornam falso, sobra apenas este caso.
      else {
          console.log("CAMINHO SEGURO");
      }
  }