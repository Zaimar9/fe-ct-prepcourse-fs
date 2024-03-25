function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0; // si no se pasan argumentos, se retorna 0
  }

  if (arguments.length === 1) {
    return 1; // si se pasa un argumento, se retorna
  }

  var multilplicacion = 1; //inicializamos la variable en 1, porque es una multiplicacion
  //iteramos en cada indice de los argumentos
  for (var i = 0; i < arguments.length; i++) {
    multilplicacion = multilplicacion * arguments[i]; // se devuelve el producto de los argumentos
  }

  return multilplicacion;
}
module.exports = multiplicarArgumentos;
