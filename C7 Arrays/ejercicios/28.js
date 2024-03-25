function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  if (!Array.isArray(arr)) {
    //el simbolo es un operador logico de negacion (!), el cual me dice que: NO ES UN ARRAY
    return false; // No es un arreglo
  }

  return arr.length > 0; // Retorna true si tiene al menos un elemento, de lo contrario, false
}

module.exports = esArrayNoVacio;
