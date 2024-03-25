function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var newArray = []; // Creamos un nuevo array para almacenar los resultados de la multiplicación

  // Iteramos sobre cada elemento del array
  for (var i = 0; i < array.length; i++) {
    // Multiplicamos el elemento por su índice y lo agregamos al nuevo array
    newArray.push(array[i] * i);
  }

  return newArray; // Devolvemos el nuevo array con los resultados de la multiplicación
}

module.exports = multiplicarElementosPorIndice;
