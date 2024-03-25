function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // Itera sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Verifica si el elemento actual es una cadena y tiene más de 5 caracteres
    if (typeof array[i] === "string" && array[i].length > 5) {
      // Si cumple ambas condiciones, devuelve el elemento actual
      return array[i];
    }
  }
  // Si no se encuentra ningún string largo, devuelve null
  return null;
}

module.exports = obtenerPrimerStringLargo;
