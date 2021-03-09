function solucao(velocidade, aceleracao, distanciaObjeto) {
    let distancia = (-1* velocidade*velocidade)/(2*aceleracao);
      if (distancia > distanciaObjeto) {
          console.log("COLISAO A FRENTE");
      }
      else if (distancia === distanciaObjeto) {
          console.log("NAO ACELERE");
      }
      else {
          console.log("CAMINHO SEGURO");
      }
  }