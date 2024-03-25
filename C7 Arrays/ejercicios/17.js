function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var resultado = 0;

  for (var i = 0; i < arrayOfNums.length; i++) {
    resultado += arrayOfNums[i];
  }

  return resultado;
}

module.exports = agregarNumeros;
