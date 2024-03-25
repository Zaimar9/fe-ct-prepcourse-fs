function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var resultadoMultiplicacion = 1;
  for (var i = a; i <= b; i++) {
    resultadoMultiplicacion = resultadoMultiplicacion * i;
  }
  return Math.abs(resultadoMultiplicacion);
}

module.exports = productoEntreNúmeros;
