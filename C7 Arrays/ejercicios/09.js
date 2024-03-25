function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  // var randomNumArrLength = Math.floor(Math.random() * array.length);
  // return array[randomNumArrLength];

  var numRandom = Math.floor(Math.random() * array.length);

  //return array[numRandom];
}

module.exports = obtenerElementoAleatorio;
