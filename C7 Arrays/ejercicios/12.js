function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var arregloResultado = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      arregloResultado.push(array[i].toUpperCase());
    } else {
      arregloResultado.push(array[i]);
    }
  }
  return arregloResultado;
}

module.exports = convertirStringAMayusculas;
