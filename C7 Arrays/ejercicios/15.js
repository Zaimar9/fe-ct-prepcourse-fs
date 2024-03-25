function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {
    return 0; //retprna o si el arreglo esta vacion
  }

  var indiceMayor = 0; //suponiendo que el primero arreglo es mayor

  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i; //se actualiza el indice del numero mas grande encontrado
    }
  }

  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
