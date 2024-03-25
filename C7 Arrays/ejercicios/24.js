function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  var arregloNuevo = []; // Creamos un nuevo arreglo para almacenar los nuevos valores

  // Iteramos 10 veces aumentando en 2 el numero recibido en cada iteracion
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      //se evalua primero que la iteracion i = 5
      continue; //Si es igual a 5, no se suma ese caso y continuamos con la siguiente iteracion
    }

    num += 2; //se aumenta en 2 el nuevo valor en cada iteracion
    arregloNuevo.push(num); //agregamos el nuevo valor al arreglo nuevo
  }

  return arregloNuevo; // se retorna el arreglo nuevo
}

module.exports = continueStatement;
