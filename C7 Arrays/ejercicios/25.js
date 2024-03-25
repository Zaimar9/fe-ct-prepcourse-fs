function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  var arrNumerosPares = 0;

  for (var i = 0; i < numeros.length; i++) {
    numeros[i];

    if (numeros[i] % 2 !== 0) {
      continue;
    }
    arrNumerosPares++;
  }
  return arrNumerosPares;
}

module.exports = contarParesConContinue;
