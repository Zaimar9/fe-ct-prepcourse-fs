function filter(arrayOfStrings) {
  // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  var arreglosConA = [];

  var arreglosConA = arrayOfStrings.filter(function (element) {
    //Se agrega una funcion anonima "element" que verifica si cada elemento comienza con “a”.
    return element.startsWith("a");
  });
  return arreglosConA;
}

module.exports = filter;
