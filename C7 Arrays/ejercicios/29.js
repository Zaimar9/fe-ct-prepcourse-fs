function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null; // Si el array es vacío, devuelve null
  }

  const maximo = Math.max(...numeros); // Encuentra el número máximo en el array
  const sumaTotal = (maximo * (maximo + 1)) / 2; // Calcula la suma total esperada de la secuencia

  const sumaActual = numeros.reduce((suma, num) => suma + num, 0); // Calcula la suma actual de los números en el array

  const numeroFaltante = sumaTotal - sumaActual; // Calcula el número faltante

  if (numeroFaltante === 0) {
    return null; // Si no hay números faltantes, devuelve null
  }

  return numeroFaltante; // Devuelve el número faltante
}
module.exports = encontrarNumeroFaltante;
