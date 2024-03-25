const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensaje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  var arregloEncontrado = array.find(callback);
  if (arregloEncontrado !== undefined) {
    return arregloEncontrado;
  } else {
    return "No se encontró el elemento";
  }
};
module.exports = buscarElemento;
