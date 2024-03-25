function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let i = 0;

  do {
    num += 5;
    i++;
  } while (i < 8);
  return num;
}

module.exports = doWhile;
