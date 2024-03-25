function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      // Verifica si el elemento actual es un múltiplo de n
      return secuencia[i]; // Devuelve el primer múltiplo encontrado
    }
  }
  return undefined; // Retorna null si no se encuentra ningún múltiplo de n en la secuencia
}

//OTRA SOLUCION
//   var flag = undefined;

//   for (let i = 0; i < secuencia.length; i++) {
//     if (secuencia[i] % n === 0) {
//       flag = secuencia[i];
//       break;
//     }
//   }

//   return flag;
// }

module.exports = encontrarPrimerMultiploDeN;
