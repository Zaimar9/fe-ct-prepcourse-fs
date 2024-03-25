function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let numerosPares = []; // Creamos un array vacío para almacenar los números pares

  // Iteramos sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el elemento actual es un número par
    if (array[i] % 2 === 0) {
      // Si es par, lo agregamos al array de números pares
      numerosPares.push(array[i]);
    }
  }

  return numerosPares; // Devolvemos el array con los números pares
}

module.exports = filtrarNumerosPares;
