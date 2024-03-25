function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var cantidadElemento = 0; //Inicializamos el contador en 0 para llevar la cuenta de los numeros mayores a 10
  //iteramos sobre cada elemento del array
  for (var i = 0; i < array.length; i++) {
    //verificamos si el elemento actual es mayor a 10
    if (array[i] > 10) {
      //si es mayor a 10, incrementamos el contador en 1
      cantidadElemento++;
    }
  }
  return cantidadElemento;
}

module.exports = contarElementosMayoresA10;
