function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  var duplicados = []; // Creamos un array vacío para almacenar los elementos duplicados

  // Iteramos sobre cada elemento del array
  for (var i = 0; i < array.length; i++) {
    // Multiplicamos cada elemento por 2 y lo agregamos al array de duplicados
    duplicados.push(array[i] * 2);
  }

  return duplicados; // Devolvemos el array con los elementos duplicados
}

module.exports = duplicarElementos;
