function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:

  if (array.length > 0) return array[0];
  else return undefined;
}
// otra opcion
//return array.shift()

module.exports = devolverPrimerElemento;
