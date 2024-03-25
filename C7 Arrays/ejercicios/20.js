function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0) {
    return true; //evaluamos si el array esta vacio, todos los elementos son iguales (o no hay elementos)
  }
  //se compara cada elemento del array con el primero
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) return false; // si encontramos un elemento diferente al primero, retornamos false
  }

  return true; //Si todos los elementos son iguales retornamos true
}

module.exports = todosIguales;
